import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  public supabaseClient: SupabaseClient

  constructor() {
    this.supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey,{schema: 'storage'});
  }
  async getAllObjects() {
    const { data, error } = await this.supabaseClient.from('objects').select('*');
    return { data, error };
  }
}
