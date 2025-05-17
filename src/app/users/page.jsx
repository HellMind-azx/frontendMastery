'use client'

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Ошибка загрузки:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Пользователи</h1>
      {users.map(user => (
        <div key={user.id} className="mb-4 p-4 border rounded">
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Компания: {user.company.name}</p>
        </div>
      ))}
    </div>
  );
}
