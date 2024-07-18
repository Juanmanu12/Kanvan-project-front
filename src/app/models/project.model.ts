export interface Project{
    id: string,
    title: string,
    user: {id: string},
    tasks: Array<{id: string}>
}