import { DOCUMENT } from '@angular/common';
import { ContentChild, Directive, ElementRef, Inject, Input } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { takeUntil } from "rxjs/operators";

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective {
  private element: HTMLElement | undefined;

  private subscriptions: Subscription[] = [];

  @ContentChild(DraggableDirective)
  handle!: DraggableDirective;

  handleElement!: HTMLElement;

  private readonly DEFAULT_DRAGGING_BOUNDARY_QUERY = "body";
  @Input() boundaryQuery = this.DEFAULT_DRAGGING_BOUNDARY_QUERY;
  draggingBoundaryElement: HTMLElement | HTMLBodyElement | undefined;

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: any
  ) { }

  ngAfterViewInit(): void {
    this.draggingBoundaryElement = <HTMLElement>(this.document as Document).querySelector(
      this.boundaryQuery
    );

    if (!this.draggingBoundaryElement) {
      throw new Error(
        "Couldn't find any element with query: " + this.boundaryQuery
      );
    } else {
      this.element = this.elementRef.nativeElement as HTMLElement;
      this.handleElement =
        this.handle?.elementRef?.nativeElement || this.element;
      this.initDrag();
    }
  }

  initDrag(): void {
    const dragStart$ = fromEvent<MouseEvent>(this.handleElement, "mousedown");
    const dragEnd$ = fromEvent<MouseEvent>(this.document, "mouseup");
    const drag$ = fromEvent<MouseEvent>(this.document, "mousemove").pipe(
      takeUntil(dragEnd$)
    );

    let initialX: number,
      initialY: number,
      currentX = 0,
      currentY = 0;

    let dragSub!: Subscription;

    const minBoundX = this.draggingBoundaryElement!.offsetLeft;
    const minBoundY = this.draggingBoundaryElement!.offsetTop;

    const maxBoundX =
      minBoundX +
      this.draggingBoundaryElement!.offsetWidth -
      this.element!.offsetWidth;
    const maxBoundY =
      minBoundY +
      this.draggingBoundaryElement!.offsetHeight -
      this.element!.offsetHeight;

    const dragStartSub = dragStart$.subscribe((event: MouseEvent) => {
      initialX = event.clientX - currentX;
      initialY = event.clientY - currentY;
      this.element!.classList.add("draggable");

      dragSub = drag$.subscribe((event: MouseEvent) => {
        event.preventDefault();

        const x = event.clientX - initialX;
        const y = event.clientY - initialY;

        currentX = x//Math.max(minBoundX, Math.min(x, maxBoundX));
        currentY = y//Math.max(minBoundY, Math.min(y, maxBoundY));

        this.element!.style.transform =
          "translate3d(" + currentX + "px, " + currentY + "px, 0)";
      });
    });

    const dragEndSub = dragEnd$.subscribe(() => {
      initialX = currentX;
      initialY = currentY;
      this.element!.classList.remove("draggable");
      if (dragSub) {
        dragSub.unsubscribe();
      }
    });

    this.subscriptions.push.apply(this.subscriptions, [
      dragStartSub,
      dragSub,
      dragEndSub,
    ]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s?.unsubscribe());
  }
}
