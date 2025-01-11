export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: number
          name: string
          description: string
          price: number
          image: string
          category: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          name: string
          description: string
          price: number
          image: string
          category: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string
          description?: string
          price?: number
          image?: string
          category?: string
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: number
          user_id: string
          status: 'pending' | 'completed' | 'cancelled'
          total: number
          created_at: string
        }
        Insert: {
          id?: number
          user_id: string
          status?: 'pending' | 'completed' | 'cancelled'
          total: number
          created_at?: string
        }
        Update: {
          id?: number
          user_id?: string
          status?: 'pending' | 'completed' | 'cancelled'
          total?: number
          created_at?: string
        }
      }
      order_items: {
        Row: {
          id: number
          order_id: number
          product_id: number
          quantity: number
          price: number
        }
        Insert: {
          id?: number
          order_id: number
          product_id: number
          quantity: number
          price: number
        }
        Update: {
          id?: number
          order_id?: number
          product_id?: number
          quantity?: number
          price?: number
        }
      }
    }
  }
}