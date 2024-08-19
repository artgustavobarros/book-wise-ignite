'use client'

export function ButtonToAddAtDb() {
  async function handleAddUsers() {
    await fetch('http://localhost:3000/api/books/add-users')
  }

  async function handleAddBooks() {
    await fetch('http://localhost:3000/api/books/add-books')
  }
  async function handleAddComments() {
    await fetch('http://localhost:3000/api/books/add-comments')
  }

  return (
    <>
      <button onClick={handleAddUsers} className="text-white">
        Adicionar usuários
      </button>
      <button onClick={handleAddBooks} className="text-white">
        Adicionar livros
      </button>
      <button onClick={handleAddComments} className="text-white">
        Adicionar comentários
      </button>
    </>
  )
}
