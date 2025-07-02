import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
  }),
});

const lessonsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.enum(['débutant', 'intermédiaire', 'avancé']),
    lesson_number: z.number(),
    duration: z.string(),
    objectives: z.array(z.string()),
    vocabulary: z.array(z.object({
      portuguese: z.string(),
      french: z.string(),
      pronunciation: z.string().optional(),
    })).optional(),
    grammar_points: z.array(z.string()).optional(),
  }),
});

const exercisesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    lesson_slug: z.string(),
    type: z.enum(['quiz', 'fill-blank', 'translation', 'listening']),
    difficulty: z.enum(['facile', 'moyen', 'difficile']),
    questions: z.array(z.object({
      question: z.string(),
      options: z.array(z.string()).optional(),
      correct_answer: z.string(),
      explanation: z.string().optional(),
    })),
  }),
});

export const collections = {
  blog: blogCollection,
  lessons: lessonsCollection,
  exercises: exercisesCollection,
};