import { TTimetable } from "@entities/timetable"
import { TIMETABLE_URL } from "@shared/consts"
import { useMutation } from "react-query"

const fetcher = async (search: string): Promise<TTimetable[]> => {
  const request = await fetch(TIMETABLE_URL, {
    method: "POST",
    body: JSON.stringify({
      search
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const { elements } = await request.json()
  return elements
}

export const useGetTimetable = () => useMutation((s: string) => fetcher(s))
