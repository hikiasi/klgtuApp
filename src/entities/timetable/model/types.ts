export type TTimetable = {
  type: TTimetableType,
  name: string,
  content: {
    id: number,
    name?: string,
    studyForm?: number, // TODO: add enum
    subGroups?: Array<{
      id: number,
      name: string,
    }>,
    firstName?: string,
    lastName?: string,
    middleName?: string,
  }
}

export type TTimetableType = 'students' | 'teachers' | 'classrooms'
