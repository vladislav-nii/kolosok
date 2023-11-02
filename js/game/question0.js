//var category_id = document.cookie.replace(/(?:(?:^|.*;\s*)category_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");

export const json = {
  locale: "ru",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "question1",
          title: {
            ru: "Какие рекомендуемые параметры агрохимических показателей почвенного плодородия минеральных почв необходимы?",
          },
          correctAnswer: "Item 2",
          isRequired: "true",
          choices: [
            {
              value: "Item 1",
              text: {
                ru: "рНксl=6,2–7,0",
              },
            },
            {
              value: "Item 2",
              text: {
                ru: "рНKCl – не менее 5,8",
              },
            },
            {
              value: "Item 3",
              text: {
                ru: "рН=5,6–6,0",
              },
            },
          ],
        },
      ],
    },
  ],
  maxTimeToFinish: 30,
  showTimerPanel: "top",
  widthMode: "responsive",
};

export const multiplier = 1;
