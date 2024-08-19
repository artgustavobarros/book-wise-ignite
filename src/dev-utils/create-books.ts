import { prisma } from '@/lib/prisma'

export async function createBooks() {
  await prisma.book.createMany({
    data: [
      {
        name: 'To Kill a Mockingbird',
        slug: 'to-kill-a-mockingbird',
        author: 'Harper Lee',
        description:
          'A novel set in the Great Depression, focusing on issues of race and justice in the american South.',
        category: ['fiction', 'classics', 'historical'],
        pageNumber: 281,
        rate: [1, 3, 5],
        userId: 'a0d06ec3-792d-43dc-8143-974139cdfbf2',
        thumb:
          'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg',
      },
      {
        name: '1984',
        slug: '1984',
        author: 'George Orwell',
        description:
          'A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.',
        category: ['fiction', 'dystopian', 'classics'],
        pageNumber: 328,
        rate: [2, 4],
        userId: 'abc18dae-2113-411f-ab3b-6c5f886e1de3',
        thumb:
          'https://m.media-amazon.com/images/I/819js3EQwbL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        name: 'Pride and Prejudice',
        slug: 'pride-and-prejudice',
        author: 'Jane Austen',
        description:
          'A romantic novel that also offers a critique of the British class system of the early 19th century.',
        category: ['fiction', 'romance', 'classics'],
        pageNumber: 279,
        rate: [1, 2, 3],
        userId: 'a0d06ec3-792d-43dc-8143-974139cdfbf2',
        thumb:
          'https://m.media-amazon.com/images/I/71CR-BOauCL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        name: 'The Great Gatsby',
        slug: 'the-great-gatsby',
        author: 'F. Scott Fitzgerald',
        description:
          'A novel about the American Dream and the disillusionment that comes with it, set in the Jazz Age.',
        category: ['fiction', 'classics', 'american'],
        pageNumber: 180,
        rate: [1],
        userId: 'abc18dae-2113-411f-ab3b-6c5f886e1de3',
        thumb:
          'https://m.media-amazon.com/images/I/61nMbHn52EL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        name: 'Moby Dick',
        slug: 'moby-dick',
        author: 'Herman Melville',
        description:
          'An epic tale of obsession and revenge, as Captain Ahab hunts the white whale, Moby Dick.',
        category: ['fiction', 'classics', 'adventure'],
        pageNumber: 585,
        rate: [4, 5],
        userId: 'abc18dae-2113-411f-ab3b-6c5f886e1de3',
        thumb:
          'https://m.media-amazon.com/images/I/A1xWjc50fmL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        name: 'The Catcher in the Rye',
        slug: 'the-catcher-in-the-rye',
        author: 'J.D. Salinger',
        description:
          'A story about teenage angst and alienation, as narrated by the rebellious Holden Caulfield.',
        category: ['fiction', 'classics', 'young adult'],
        pageNumber: 214,
        rate: [2, 3, 5],
        userId: 'b2d0d746-c26a-41d7-8145-5252438f7435',
        thumb:
          'https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg',
      },
      {
        name: 'Brave New World',
        slug: 'brave-new-world',
        author: 'Aldous Huxley',
        description:
          'A dystopian novel that explores the dangers of state control and the loss of individuality.',
        category: ['fiction', 'dystopian', 'science fiction'],
        pageNumber: 268,
        rate: [1, 4],
        userId: 'a0d06ec3-792d-43dc-8143-974139cdfbf2',
        thumb:
          'https://m.media-amazon.com/images/I/81p56WUuDbL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        name: 'The Lord of the Rings: The Fellowship of the Ring',
        slug: 'the-lord-of-the-rings-the-fellowship-of-the-ring',
        author: 'J.R.R. Tolkien',
        description:
          'The first part of the epic fantasy trilogy that follows the journey to destroy the One Ring.',
        category: ['fiction', 'fantasy', 'adventure'],
        pageNumber: 423,
        rate: [3, 5],
        userId: 'c5a2dad7-94fb-45ae-9b3d-b1245697898b',
        thumb:
          'https://m.media-amazon.com/images/I/71Ep7UNeTtL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        name: 'The Hobbit',
        slug: 'the-hobbit',
        author: 'J.R.R. Tolkien',
        description:
          'A prelude to The Lord of the Rings, this novel follows Bilbo Baggins on his adventure to reclaim a treasure.',
        category: ['fiction', 'fantasy', 'adventure'],
        pageNumber: 310,
        rate: [3, 5],
        userId: 'a0d06ec3-792d-43dc-8143-974139cdfbf2',
        thumb:
          'https://m.media-amazon.com/images/I/71V2v2GtAtL._AC_UF1000,1000_QL80_.jpg',
      },
      {
        name: 'War and Peace',
        slug: 'war-and-peace',
        author: 'Leo Tolstoy',
        description:
          'A sweeping narrative that explores the history, culture, and society of Russia during the Napoleonic Wars.',
        category: ['fiction', 'classics', 'historical'],
        pageNumber: 1225,
        rate: [1, 2, 4, 5],
        userId: 'c5a2dad7-94fb-45ae-9b3d-b1245697898b',
        thumb:
          'https://m.media-amazon.com/images/I/71wXZB-VtBL._AC_UF1000,1000_QL80_.jpg',
      },
    ],
  })
}
