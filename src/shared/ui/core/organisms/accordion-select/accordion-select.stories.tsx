import { Meta, StoryObj } from "@storybook/react";
import Accordion from ".";
import { Typography } from "../../atoms";

type TAccordionComponent = {
  items: {
    title: string;
    infoText?: string;
    chapter: string;
    teamMembers?: {
      name: string;
      position: string;
      telegramIcon?: boolean;
      webIcon?: boolean;
    }[];
  }[];
};

const AccordionComponent = ({ items }: TAccordionComponent) => {
  return (
    <Accordion defaultActiveKey="1">
      {items.map((item, index) => (
        <Accordion.Item key={index} eventKey={String(index + 1)}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>
            {item.chapter === "main-goal" ? (
              <Accordion.Info>{item.infoText}</Accordion.Info>
            ) : (
              item.teamMembers && (
                <div>
                  {item.teamMembers.map((teamMember, memberIndex) => (
                    <Accordion.Team
                      key={memberIndex}
                      name={teamMember.name}
                      position={teamMember.position}
                      telegramIcon={teamMember.telegramIcon}
                      webIcon={teamMember.webIcon}
                    />
                  ))}
                </div>
              )
            )}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

const meta: Meta<typeof AccordionComponent> = {
  title: "",
  component: AccordionComponent,
};

export default meta;

type TAccordionComponentStory = StoryObj<typeof AccordionComponent>;

export const Default: TAccordionComponentStory = {
  render: (args) => <AccordionComponent {...args} />,
  args: {
    items: [
      {
        title: "Основная цель",
        infoText:
          "Предоставить студентам и преподавателям КГТУ удобный и практичный функционал просмотра расписания и личного кабинета. \n\r\n Ранее разработанные сайты университета желают лучшего. Расписание показывалось в громадных и неудобных HTML-таблицах, а поддержки для мобильных устройств практически не было.\r\n\r\n С февраля 2022 командой студентов разрабатывается мобильное приложение и веб-версия продукта.",
        chapter: "main-goal",
      },
      {
        title: "Команда",
        chapter: "team",
        teamMembers: [
          {
            name: "Егор Калашников",
            position: "Backend / Mobile & Web",
            telegramIcon: true,
            webIcon: false,
          },
          {
            name: "Никита Счастнев",
            position: "Design / Mobile & Web",
            telegramIcon: true,
            webIcon: true,
          },
          {
            name: "Виталий Попов",
            position: "Android / Mobile",
            telegramIcon: true,
            webIcon: false,
          },
          {
            name: "Михаил Чаус",
            position: "iOS / Mobile",
            telegramIcon: true,
            webIcon: true,
          },
          {
            name: "Иван Гаврильков",
            position: "Frontend / Web",
            telegramIcon: false,
            webIcon: false,
          },
          {
            name: "Максим Рождественнский",
            position: "Frontend / Web",
            telegramIcon: true,
            webIcon: false,
          },
          {
            name: "Иван Волков",
            position: "Frontend / Web",
            telegramIcon: true,
            webIcon: false,
          },
        ],
      },
    ],
  },
};
