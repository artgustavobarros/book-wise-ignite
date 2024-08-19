import { prisma } from '@/lib/prisma'

export async function createComments() {
  await prisma.comment.createMany({
    data: [
      {
        comment: 'A compelling story with well-developed characters.',
        bookId: '1649f2fd-1683-41a0-8a03-86b79b4453b8',
        userId: 'a0d06ec3-792d-43dc-8143-974139cdfbf2',
      },
      {
        comment:
          'The pacing of the book keeps you hooked from start to finish.',
        bookId: '2b49376f-3c41-4767-a960-a57655d5db93',
        userId: 'abc18dae-2113-411f-ab3b-6c5f886e1de3',
      },
      {
        comment:
          'An insightful read that offers a fresh perspective on the subject.',
        bookId: '1649f2fd-1683-41a0-8a03-86b79b4453b8',
        userId: 'b2d0d746-c26a-41d7-8145-5252438f7435',
      },
      {
        comment:
          "The author's writing style is both engaging and thought-provoking.",
        bookId: '2b49376f-3c41-4767-a960-a57655d5db93',
        userId: 'c5a2dad7-94fb-45ae-9b3d-b1245697898b',
      },
      {
        comment: 'This book is a masterpiece of modern literature.',
        bookId: '35937c3e-d420-4504-8d60-de24379634e6',
        userId: 'abc18dae-2113-411f-ab3b-6c5f886e1de3',
      },
      {
        comment: 'A great blend of fiction and historical facts.',
        bookId: '35937c3e-d420-4504-8d60-de24379634e6',
        userId: 'abc18dae-2113-411f-ab3b-6c5f886e1de3',
      },
      {
        comment:
          'The plot twists are unpredictable and keep the reader guessing.',
        bookId: '35937c3e-d420-4504-8d60-de24379634e6',
        userId: 'b2d0d746-c26a-41d7-8145-5252438f7435',
      },
      {
        comment: 'An excellent sequel that surpasses the original.',
        bookId: '575adefc-a65f-4992-b613-405f8f68d993',
        userId: 'a0d06ec3-792d-43dc-8143-974139cdfbf2',
      },
      {
        comment: 'A must-read for anyone interested in this genre.',
        bookId: '575adefc-a65f-4992-b613-405f8f68d993',
        userId: 'b2d0d746-c26a-41d7-8145-5252438f7435',
      },
      {
        comment:
          'The world-building in this book is incredibly detailed and immersive.',
        bookId: '76e099cc-dbca-4b79-bc3e-7dd725102ac9',
        userId: 'a0d06ec3-792d-43dc-8143-974139cdfbf2',
      },
      {
        comment: 'A compelling story with well-developed characters.',
        bookId: 'e59ee90a-3db8-4f59-92e4-b51ebb1e20f3',
        userId: 'c5a2dad7-94fb-45ae-9b3d-b1245697898b',
      },
      {
        comment:
          'The pacing of the book keeps you hooked from start to finish.',
        bookId: 'e59ee90a-3db8-4f59-92e4-b51ebb1e20f3',
        userId: 'a0d06ec3-792d-43dc-8143-974139cdfbf2',
      },
      {
        comment:
          'An insightful read that offers a fresh perspective on the subject.',
        bookId: '97126be8-9443-461e-852c-e572b3b3f922',
        userId: 'b2d0d746-c26a-41d7-8145-5252438f7435',
      },
      {
        comment:
          "The author's writing style is both engaging and thought-provoking.",
        bookId: 'bfd68148-3d05-4089-aff6-4e74e1334f34',
        userId: 'a0d06ec3-792d-43dc-8143-974139cdfbf2',
      },
      {
        comment: 'This book is a masterpiece of modern literature.',
        bookId: 'bfd68148-3d05-4089-aff6-4e74e1334f34',
        userId: 'c5a2dad7-94fb-45ae-9b3d-b1245697898b',
      },
      {
        comment: 'A great blend of fiction and historical facts.',
        bookId: 'bfd68148-3d05-4089-aff6-4e74e1334f34',
        userId: 'c5a2dad7-94fb-45ae-9b3d-b1245697898b',
      },
      {
        comment:
          'The plot twists are unpredictable and keep the reader guessing.',
        bookId: 'a6fa4a83-6e98-4800-a0be-5f386537290f',
        userId: 'b2d0d746-c26a-41d7-8145-5252438f7435',
      },
      {
        comment: 'An excellent sequel that surpasses the original.',
        bookId: '97126be8-9443-461e-852c-e572b3b3f922',
        userId: 'b2d0d746-c26a-41d7-8145-5252438f7435',
      },
      {
        comment: 'A must-read for anyone interested in this genre.',
        bookId: 'da6475a7-ba61-4693-a0f1-1f4260c0fa5f',
        userId: 'abc18dae-2113-411f-ab3b-6c5f886e1de3',
      },
      {
        comment:
          'The world-building in this book is incredibly detailed and immersive.',
        bookId: 'da6475a7-ba61-4693-a0f1-1f4260c0fa5f',
        userId: 'abc18dae-2113-411f-ab3b-6c5f886e1de3',
      },
    ],
  })
}
