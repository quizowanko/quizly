import { createContext, useContext, useEffect, useState } from "react";
import { usePage } from "./PageProvider";

const QuizCategoryContext = createContext({});

const QuizCategoryProvider = ({ children }) => {
  const categories = [
    {
      id: "radek",
      title: "Radosław Duma",
      questions: [
        {
          question: "W jakim miesiącu w 2022 roku Radosła Duma osiągnął rangę championa w grze Rocket League",
          answers: [
            {
              id: "a",
              answer: "styczeń"
            },
            {
              id: "b",
              answer: "luty"
            },
            {
              id: "c",
              answer: "marzec"
            },
            {
              id: "d",
              answer: "maj"
            }
          ],
          correctAnswer: "c"
        },
        {
          question: "Z jakiej gry jest najrzadszy achivment Radosława Dumy na steamie",
          answers: [
            {
              id: "a",
              answer: "BattleBlock Theater"
            },
            {
              id: "b",
              answer: "Human Flat Fall"
            },
            {
              id: "c",
              answer: "Trine 2"
            },
            {
              id: "d",
              answer: "Little Nigthmares"
            }
          ],
          correctAnswer: "d"
        },
        {
          question: "Jaki jest Radosław Duma",
          image: "radek_screen.jpg",
          answers: [
            {
              id: "a",
              answer: "upośledzony"
            },
            {
              id: "b",
              answer: "zajebisty"
            },
            {
              id: "c",
              answer: "chujem"
            },
            {
              id: "d",
              answer: "downem"
            }
          ],
          correctAnswer: "c"
        },
        {
          question: "Do jakiej wiadomości Radosław Duma wysłał najwięcej 'D' w 'XD' na poważnej grupie piłkarskiej (16 'D')",
          answers: [
            {
              id: "a",
              answer: "Po tym jak real madryt oznajmił, że nie szukają obrońcy po kontuzji Militao"
            },
            {
              id: "b",
              answer: "Po wysłaniu niestrzelonej przez Darwina Nuneza setki"
            },
            {
              id: "c",
              answer: "Po historii kormki z deszczem w autobusie"
            },
            {
              id: "d",
              answer: "Po wysłaniu fragmentu z ligi minus z kowalem 'Raków piździaków'"
            }
          ],
          correctAnswer: "b"
        }
      ]
    },
    {
      id: "pilka",
      title: "Kluczowa wiedza o piłce nożnej",
      questions: [
        {
          question: "Jaki numer koszulki miał Robert Lewandowski w Lechu Poznań",
          answers: [
            {
              id: "a",
              answer: "8"
            },
            {
              id: "b",
              answer: "9"
            },
            {
              id: "c",
              answer: "10"
            },
            {
              id: "d",
              answer: "24"
            }
          ],
          correctAnswer: "a"
        },
        {
          question: "Ile wynosi różnca wygranych Realu z Barcelona do przegranych",
          answers: [
            {
              id: "a",
              answer: "0"
            },
            {
              id: "b",
              answer: "-2"
            },
            {
              id: "c",
              answer: "4"
            },
            {
              id: "d",
              answer: "2"
            }
          ],
          correctAnswer: "c"
        },
        {
          question: "Ile goli strzeliła Polska na mundialach w ostatnich 10 latach",
          answers: [
            {
              id: "a",
              answer: "4"
            },
            {
              id: "b",
              answer: "6"
            },
            {
              id: "c",
              answer: "8"
            },
            {
              id: "d",
              answer: "5"
            }
          ],
          correctAnswer: "d"
        },
        {
          question: "Ile goli strzelił Jamal Musiala na mundialu w 2022",
          answers: [
            {
              id: "a",
              answer: "0"
            },
            {
              id: "b",
              answer: "1"
            },
            {
              id: "c",
              answer: "2"
            },
            {
              id: "d",
              answer: "3"
            }
          ],
          correctAnswer: "a"
        }
      ]
    },
    {
      id: "gry",
      title: "Dobre gry",
      questions: [
        {
          question: "Jaka jest minimanlna liczba bossów, które należy pokonać żeby przejść Dark Souls 3",
          answers: [
            {
              id: "a",
              answer: "10"
            },
            {
              id: "b",
              answer: "15"
            },
            {
              id: "c",
              answer: "13"
            },
            {
              id: "d",
              answer: "11"
            }
          ],
          correctAnswer: "c"
        },
        {
          question: "Cytat z wiedźmina 3: \"To nie są ręce żadnej ekscelencji, tylko XXX. Więc rozmawiajmy jak chłop z chłopem.\". Co powiedział generał Nilfgardu do sołtysa białego sadu",
          answers: [
            {
              id: "a",
              answer: "chłopa"
            },
            {
              id: "b",
              answer: "wieśniaka"
            },
            {
              id: "c",
              answer: "rolnika"
            },
            {
              id: "d",
              answer: "zwykłego robola"
            }
          ],
          correctAnswer: "c"
        },
        {
          question: "Jakie statystyki daje malnika w Valhaimiku",
          answers: [
            {
              id: "a",
              answer: "20 kondycji i 7 zdrowia"
            },
            {
              id: "b",
              answer: "20 kondycji i 8 zdrowia"
            },
            {
              id: "c",
              answer: "18 kodycji i 10 zdrowia"
            },
            {
              id: "d",
              answer: "18 kondycji i 8 zdrowia"
            }
          ],
          correctAnswer: "a"
        },
        {
          question: "Co to jest",
          image: "brumbrum.jpg",
          answers: [
            {
              id: "a",
              answer: "Gizmo"
            },
            {
              id: "b",
              answer: "Hotshot"
            },
            {
              id: "c",
              answer: "Backfire"
            },
            {
              id: "d",
              answer: "Kia Ceed"
            }
          ],
          correctAnswer: "a"
        }
      ]
    },
    {
      id: "cyfronet",
      title: "Cyfronet",
      questions: [
        {
          question: "Ile lat ma Kaziemierz Wiatr, dyrektor Cyfronetu",
          answers: [
            {
              id: "a",
              answer: "72"
            },
            {
              id: "b",
              answer: "54"
            },
            {
              id: "c",
              answer: "68"
            },
            {
              id: "d",
              answer: "62"
            }
          ],
          correctAnswer: "c"
        },
        {
          question: "Kiedy powstał pierwszy commit aplikacji portal",
          answers: [
            {
              id: "a",
              answer: "12 czerwca 2021"
            },
            {
              id: "b",
              answer: "25 czerwca 2021"
            },
            {
              id: "c",
              answer: "6 lipca 2021"
            },
            {
              id: "d",
              answer: "1 lipca 2021"
            }
          ],
          correctAnswer: "b"
        },
        {
          question: "Ile gwiazdek na Google ma hotel Bel Ami",
          answers: [
            {
              id: "a",
              answer: "4.4"
            },
            {
              id: "b",
              answer: "4.0"
            },
            {
              id: "c",
              answer: "3.7"
            },
            {
              id: "d",
              answer: "4.6"
            }
          ],
          correctAnswer: "a"
        },
        {
          question: "Jakiego dnia odbyło się spotkanie Francja - Niemcy na euro 2020 (zdjęcie powiązane)",
          image: "radek_screen2.jpg",
          answers: [
            {
              id: "a",
              answer: "19 czerwca 2021"
            },
            {
              id: "b",
              answer: "23 czerwca 2021"
            },
            {
              id: "c",
              answer: "11 czerwca 2021"
            },
            {
              id: "d",
              answer: "15 czerwca 2021"
            }
          ],
          correctAnswer: "d"
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const currentCategory = categories.find((category) => category.id === selectedCategory);

  const { setSelectedPage } = usePage();

  useEffect(() => {
    if (selectedCategory)
      setSelectedPage("quiz");
    // eslint-disable-next-line
  }, [selectedCategory]);

  return (
    <QuizCategoryContext.Provider value={{ categories, currentCategory, setSelectedCategory }}>
      {children}
    </QuizCategoryContext.Provider>
  );
};

const useQuizCategory = () => useContext(QuizCategoryContext);

export { QuizCategoryProvider, useQuizCategory };
