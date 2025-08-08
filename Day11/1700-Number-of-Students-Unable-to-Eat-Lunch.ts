function countStudents(students: number[], sandwiches: number[]): number {
	let i = 0;
	while (students.length > 0 && i !== students.length) {
		if (sandwiches[0] === students[0]) {
			sandwiches.shift();
			students.shift();
			i = 0;
		} else {
			students.push(students.shift()!);
			i++;
		}
	}
	return students.length;
}
