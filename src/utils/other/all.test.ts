import { all } from "./all";

type Person = {
	name: string;
	age: number;
	likesProgramming: boolean;
};

const person1: Person = { 
	name: "Hubert Blaine Wolfe­schlegel­stein­hausen­berger­dorf",
	age: 78,
	likesProgramming: true
};

const person2: Person = {
	name: "John Doe",
	age: 28,
	likesProgramming: true
};

const CASES: [Person, Person | undefined][] = [
	[person1, undefined],
	[person2, person2]
];

const shouldAddToFriends = all<Person>(
	({name}) => name.length < 20,
	({age}) => age >= 18 && age <= 36,
	({likesProgramming}) => likesProgramming === true 
);

describe("other/all", () => {
	CASES.forEach(([value, expected]) => {
		it(`should return "${JSON.stringify(expected)}" on input ${JSON.stringify(value)}`, () => {
			expect(shouldAddToFriends(value)).toStrictEqual(expected);
		});
	});
});
