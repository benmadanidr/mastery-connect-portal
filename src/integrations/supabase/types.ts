export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      academic_lessons: {
        Row: {
          created_at: string
          department_id: string | null
          description: string | null
          duration_minutes: number
          id: string
          image_url: string | null
          is_active: boolean
          level: string
          max_students: number
          price: number | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          department_id?: string | null
          description?: string | null
          duration_minutes?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          level: string
          max_students?: number
          price?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          department_id?: string | null
          description?: string | null
          duration_minutes?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          level?: string
          max_students?: number
          price?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "academic_lessons_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      classrooms: {
        Row: {
          capacity: number
          created_at: string
          equipment: string[] | null
          id: string
          is_available: boolean
          location: string | null
          name: string
          updated_at: string
        }
        Insert: {
          capacity?: number
          created_at?: string
          equipment?: string[] | null
          id?: string
          is_available?: boolean
          location?: string | null
          name: string
          updated_at?: string
        }
        Update: {
          capacity?: number
          created_at?: string
          equipment?: string[] | null
          id?: string
          is_available?: boolean
          location?: string | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      departments: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: string
          is_active: boolean
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          birth_date: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          birth_date?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          birth_date?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      schedules: {
        Row: {
          classroom_id: string | null
          created_at: string
          day_of_week: number
          end_date: string | null
          end_time: string
          id: string
          is_active: boolean
          lesson_id: string | null
          start_date: string
          start_time: string
          teacher_id: string
          updated_at: string
        }
        Insert: {
          classroom_id?: string | null
          created_at?: string
          day_of_week: number
          end_date?: string | null
          end_time: string
          id?: string
          is_active?: boolean
          lesson_id?: string | null
          start_date: string
          start_time: string
          teacher_id: string
          updated_at?: string
        }
        Update: {
          classroom_id?: string | null
          created_at?: string
          day_of_week?: number
          end_date?: string | null
          end_time?: string
          id?: string
          is_active?: boolean
          lesson_id?: string | null
          start_date?: string
          start_time?: string
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "schedules_classroom_id_fkey"
            columns: ["classroom_id"]
            isOneToOne: false
            referencedRelation: "classrooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedules_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "academic_lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      service_requests: {
        Row: {
          created_at: string
          customer_id: string
          deadline: string | null
          details: string | null
          id: string
          service_id: string | null
          status: string
          total_price: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_id: string
          deadline?: string | null
          details?: string | null
          id?: string
          service_id?: string | null
          status?: string
          total_price: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_id?: string
          deadline?: string | null
          details?: string | null
          id?: string
          service_id?: string | null
          status?: string
          total_price?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_requests_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          name: string
          price: number
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
          price: number
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
          price?: number
          updated_at?: string
        }
        Relationships: []
      }
      student_enrollments: {
        Row: {
          created_at: string
          enrollment_date: string
          id: string
          lesson_id: string | null
          notes: string | null
          payment_status: string
          status: string
          student_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          enrollment_date?: string
          id?: string
          lesson_id?: string | null
          notes?: string | null
          payment_status?: string
          status?: string
          student_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          enrollment_date?: string
          id?: string
          lesson_id?: string | null
          notes?: string | null
          payment_status?: string
          status?: string
          student_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_enrollments_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "academic_lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      student_registrations: {
        Row: {
          birth_date: string | null
          created_at: string
          education_level: string
          email: string
          first_name: string
          guardian_name: string | null
          guardian_phone: string | null
          id: string
          id_number: string | null
          last_name: string
          notes: string | null
          phone: string
          photo_url: string | null
          previous_school: string | null
          registration_type: string
          subjects: string[] | null
          updated_at: string
        }
        Insert: {
          birth_date?: string | null
          created_at?: string
          education_level: string
          email: string
          first_name: string
          guardian_name?: string | null
          guardian_phone?: string | null
          id?: string
          id_number?: string | null
          last_name: string
          notes?: string | null
          phone: string
          photo_url?: string | null
          previous_school?: string | null
          registration_type: string
          subjects?: string[] | null
          updated_at?: string
        }
        Update: {
          birth_date?: string | null
          created_at?: string
          education_level?: string
          email?: string
          first_name?: string
          guardian_name?: string | null
          guardian_phone?: string | null
          id?: string
          id_number?: string | null
          last_name?: string
          notes?: string | null
          phone?: string
          photo_url?: string | null
          previous_school?: string | null
          registration_type?: string
          subjects?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      teacher_applications: {
        Row: {
          address: string | null
          birth_date: string | null
          certificates_urls: string[] | null
          created_at: string
          cv_url: string | null
          email: string
          emergency_contact: string | null
          emergency_phone: string | null
          experience: string | null
          first_name: string
          graduation_year: string | null
          id: string
          id_number: string | null
          last_name: string
          motivation: string | null
          phone: string
          qualification: string
          status: string
          subjects: string | null
          university: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          birth_date?: string | null
          certificates_urls?: string[] | null
          created_at?: string
          cv_url?: string | null
          email: string
          emergency_contact?: string | null
          emergency_phone?: string | null
          experience?: string | null
          first_name: string
          graduation_year?: string | null
          id?: string
          id_number?: string | null
          last_name: string
          motivation?: string | null
          phone: string
          qualification: string
          status?: string
          subjects?: string | null
          university?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          birth_date?: string | null
          certificates_urls?: string[] | null
          created_at?: string
          cv_url?: string | null
          email?: string
          emergency_contact?: string | null
          emergency_phone?: string | null
          experience?: string | null
          first_name?: string
          graduation_year?: string | null
          id?: string
          id_number?: string | null
          last_name?: string
          motivation?: string | null
          phone?: string
          qualification?: string
          status?: string
          subjects?: string | null
          university?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "teacher" | "student"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "teacher", "student"],
    },
  },
} as const
