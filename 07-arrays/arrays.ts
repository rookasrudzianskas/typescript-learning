const superHeros: string[] = [];
// const heroPower: number[] = []; // number[]
const heroPower: Array<number> = []; // Generic type

type User = {
    name: string;
    isActive: boolean;
}

const allUsers: User[] = [];

const MLModels: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
];

superHeros.push('IronMan');
heroPower.push(100);

allUsers.push({ name: 'IronMan', isActive: true });
