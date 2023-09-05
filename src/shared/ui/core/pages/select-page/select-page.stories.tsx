import { Meta, StoryObj } from '@storybook/react'
import { SelectPage } from '.'
import { TTimetable } from '@entities/timetable'
import { useState } from 'react'
import { TSearchItem } from '../../organisms'

const SelectPageStory = ({ }) => {
  const [showSearch, setShowSearch] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const mockData = data
  const [sublist, setSublist] = useState<TSearchItem[]>([])
  const [isBackward, setIsBackward] = useState(false)
  const [pickedId, setPickedId] = useState(-12)
  const searchList: TSearchItem[] = mockData.map(item => ({
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
            setInputValue(item.name)
            setPickedId(item.id)
            setIsBackward(false)
            setShowSearch(false)
          },
          value: item.name,
        })))
      } else {
        setInputValue(item.name)
        setPickedId(item.content.id)
        setShowSearch(false)
      }
    },
    isPicked: item.content.id === pickedId
  }))
  const onBackward = () => {
    setIsBackward(false)
  }
  return (
    <SelectPage
      inputProps={{
        disabled: false,
        value: inputValue,
        onChange: (e) => {
          setInputValue(e)
          setShowSearch(true)
        },
        placeholder: 'Группа, преподаватель, аудитория',
      }}
      searchListProps={{
        subItems: sublist,
        show: showSearch,
        onBackward: onBackward,
        isBackward: isBackward,
        items: searchList.filter(i => i.value.includes(inputValue.toUpperCase())),
        isLoading: false,
      }}
      buttonProps={{
        onClick() {

        },
        isDisable: false,
      }}
    />
  )
}



const meta: Meta<typeof SelectPageStory> = {
  title: '',
  component: SelectPageStory,
}

export default meta

type TSelectPageStory = StoryObj<typeof SelectPageStory>

export const Default: TSelectPageStory = {
  render: args => <SelectPageStory {...args} />,
  args: {
  },
}

const data: TTimetable[] = [
  {
    "type": "students",
    "name": "19-ВТ(рас)",
    "content": {
      "id": 699,
      "name": "19-ВТ(рас)",
      "studyForm": 1,
      "subGroups": [
        {
          "id": 701,
          "name": "19-ВТ(рас)-1"
        },
        {
          "id": 700,
          "name": "19-ВТ(рас)-2"
        }
      ]
    }
  },
  {
    "type": "students",
    "name": "20-ВТ-1",
    "content": {
      "id": 745,
      "name": "20-ВТ-1",
      "studyForm": 1,
      "subGroups": [
        {
          "id": 746,
          "name": "20-ВТ-1-1"
        },
        {
          "id": 747,
          "name": "20-ВТ-1-2"
        }
      ]
    }
  },
  {
    "type": "students",
    "name": "20-ВТ-2",
    "content": {
      "id": 748,
      "name": "20-ВТ-2",
      "studyForm": 1,
      "subGroups": []
    }
  },
  {
    "type": "students",
    "name": "21-ВТ-1",
    "content": {
      "id": 784,
      "name": "21-ВТ-1",
      "studyForm": 1,
      "subGroups": [
        {
          "id": 786,
          "name": "21-ВТ-1-1"
        },
        {
          "id": 785,
          "name": "21-ВТ-1-2"
        }
      ]
    }
  },
  {
    "type": "students",
    "name": "21-ВТ-2",
    "content": {
      "id": 787,
      "name": "21-ВТ-2",
      "studyForm": 1,
      "subGroups": [
        {
          "id": 789,
          "name": "21-ВТ-2-1"
        },
        {
          "id": 788,
          "name": "21-ВТ-2-2"
        }
      ]
    }
  },
  {
    "type": "students",
    "name": "22-ВТ-1",
    "content": {
      "id": 1565,
      "name": "22-ВТ-1",
      "studyForm": 1,
      "subGroups": [
        {
          "id": 1566,
          "name": "22-ВТ-1-1"
        },
        {
          "id": 1567,
          "name": "22-ВТ-1-2"
        }
      ]
    }
  },
  {
    "type": "students",
    "name": "22-ВТ-2",
    "content": {
      "id": 1568,
      "name": "22-ВТ-2",
      "studyForm": 1,
      "subGroups": []
    }
  },
  {
    "type": "students",
    "name": "22-ВТ-2-1",
    "content": {
      "id": 1569,
      "name": "22-ВТ-2-1",
      "studyForm": 1,
      "subGroups": []
    }
  },
  {
    "type": "students",
    "name": "22-ВТ-2-2",
    "content": {
      "id": 1570,
      "name": "22-ВТ-2-2",
      "studyForm": 1,
      "subGroups": []
    }
  },
  {
    "type": "students",
    "name": "22-ВТ/м",
    "content": {
      "id": 2139,
      "name": "22-ВТ/м",
      "studyForm": 1,
      "subGroups": []
    }
  },
  {
    "type": "teachers",
    "name": "Евтропков Владимир Михайлович",
    "content": {
      "id": 3359,
      "firstName": "Владимир",
      "lastName": "Евтропков",
      "middleName": "Михайлович"
    }
  }
]
