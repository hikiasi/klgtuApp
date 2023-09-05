import LayoutContext from '@app/navigation-provider/ui/layout-context';
import { useGetTimetable } from '@features/timetable';
import { TSearchItem } from '@shared/ui/core/organisms';
import { SelectPage as SelectPageConstructor } from '@shared/ui/core/pages'
import { useContext, useEffect, useState } from 'react';
export type TSelectPage = {

}

export const SelectPage = ({ }: TSelectPage) => {
  const { setFooterVisibility } = useContext(LayoutContext)
  const { mutate: getTimetable, data, isLoading, isError } = useGetTimetable()
  const [showSearch, setShowSearch] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [sublist, setSublist] = useState<TSearchItem[]>([])
  const [isBackward, setIsBackward] = useState(false)
  const [pickedId, setPickedId] = useState(-1)
  const searchList: TSearchItem[] = data?.map(item => ({
    id: item.content.id,
    value: item.name,
    isIcon: item.content.subGroups ? item.content.subGroups?.length > 0 : false,
    onClick() {
      if (item.content.subGroups ? item.content.subGroups?.length > 0 : false) {
        setIsBackward(true)
        setSublist(item.content!.subGroups!.map(item => ({
          id: item.id,
          isIcon: false,
          isPicked: item.id === pickedId,
          onClick() {
            setInputValue(item.name.toUpperCase())
            setPickedId(item.id)
            setIsBackward(false)
            setShowSearch(false)
          },
          value: item.name,
        })))
      } else {
        setInputValue(item.name.toUpperCase())
        setPickedId(item.content.id)
        setShowSearch(false)
      }
    },
    isPicked: item.content.id === pickedId
  })) ?? []
  const onBackward = () => {
    setIsBackward(false)
  }
  useEffect(() => {
    setFooterVisibility?.(false)
  }, [])
  //TODO: сделать нормальное появление поисковика, постараться убрать проверку в setInputValue
  useEffect(() => {
    if (inputValue.length < 2) {
      setShowSearch(false)
      return
    }
    if (pickedId < 0) {
      setShowSearch(true)
      getTimetable(inputValue)
    }
  }, [inputValue])
  return (
    <SelectPageConstructor
      inputProps={{
        disabled: false,
        value: inputValue,
        onChange: (e) =>
          setInputValue(prevVal => {
            if (prevVal.length > e.length) {
              setPickedId(-1)
            }
            return e
          }),
        placeholder: 'Группа, преподаватель, аудитория',
      }}
      searchListProps={{
        subItems: sublist,
        show: showSearch,
        onBackward: onBackward,
        isBackward: isBackward,
        items: searchList,
        isLoading: isLoading,
      }}
      buttonProps={{
        onClick() {
        },
        isDisable: pickedId < 0,
      }}
    />
  );
};
