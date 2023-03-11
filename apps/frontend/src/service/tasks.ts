import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tasksAPI = createApi({
  reducerPath: "tasksAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333" }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    
    getTask: builder.query({
      query: () => '/tasks',
      providesTags: ['Tasks']
    }),
    
    addTask: builder.mutation({
      query: (body) => ({
        url: "/tasks",
        method: "POST",
        body
      }),
      invalidatesTags: ['Tasks']
    }),

    updateTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ['Tasks']
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Tasks']
    }),

    clearAllTasks: builder.mutation({
      query: () => ({
        url: "/tasks/clearall",
        method: "DELETE",
      }),
      invalidatesTags: ['Tasks']
    }),

    clearAllComplete: builder.mutation({
      query: () => ({
        url: "/tasks/clearcompleted",
        method: "DELETE",
      }),
      invalidatesTags: ['Tasks']
    }),
  })
})

export const { 
  useGetTaskQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useClearAllTasksMutation,
  useClearAllCompleteMutation
} = tasksAPI