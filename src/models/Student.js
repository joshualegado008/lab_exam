
export const COURSES = [
  'Computer Science',
  'Information Technology',
  'Data Science',
  'Software Engineering',
  'Cybersecurity',
  'Network Engineering',
]

export const YEAR_LEVELS = ['1st Year', '2nd Year', '3rd Year', '4th Year']

/**
 * Creates a Student object.
 * @param {Partial<Student>} fields
 * @returns {Student}
 */
export function createStudent({
  id = '',
  name = '',
  course = COURSES[0],
  year = YEAR_LEVELS[0],
  gpa = '0.00',
  email = '',
  enrolled = String(new Date().getFullYear()),
} = {}) {
  return { id, name, course, year, gpa, email, enrolled }
}

/**
 * Seed data — initial student records.
 * @returns {Student[]}
 */
export function getSeedStudents() {
  return [
    createStudent({ id: 'STU-001', name: 'Joshua Legado',     course: 'Computer Science',      year: '3rd Year', gpa: '3.82', email: 'j.legado@uni.edu',   enrolled: '2022' }),
    createStudent({ id: 'STU-002', name: 'Ruther Berino',      course: 'Information Technology', year: '2nd Year', gpa: '3.56', email: 'r.berino@uni.edu',    enrolled: '2023' }),
    createStudent({ id: 'STU-003', name: 'Dr. Jose Rizal',       course: 'Data Science',           year: '4th Year', gpa: '3.95', email: 'j.rizal@uni.edu',    enrolled: '2021' }),
    createStudent({ id: 'STU-004', name: 'Francis Leo Marcos',       course: 'Software Engineering',   year: '1st Year', gpa: '3.40', email: 'f.leo@uni.edu',  enrolled: '2024' }),
    createStudent({ id: 'STU-005', name: 'Skusta Clee',   course: 'Cybersecurity',          year: '3rd Year', gpa: '3.71', email: 's.clee@uni.edu',    enrolled: '2022' }),
    createStudent({ id: 'STU-006', name: 'Flow G',     course: 'Computer Science',       year: '2nd Year', gpa: '3.63', email: 'f.g@uni.edu',  enrolled: '2023' }),
  ]
}

/**
 * Generates a unique Student ID based on current list length.
 * @param {number} count
 * @returns {string}
 */
export function generateStudentId(count) {
  return `STU-${String(count + 1).padStart(3, '0')}`
}

/**
 * Generates a random GPA between 3.00 and 3.99.
 * @returns {string}
 */
export function randomGpa() {
  return (3.0 + Math.random() * 0.99).toFixed(2)
}