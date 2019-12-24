import React from 'react';
import { getTodoList } from 'APIs/Todo';
import UseGetApi from 'Hooks/UseGetApi';

export default () => {
    const { data: todos, loading, error, refetch } = UseGetApi(getTodoList);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {todos.map((todo: any) => (
                <div key={todo.id}>
                    {todo.title}
                </div>
            ))}
        </div>
    );
}