import Driver from "../assets/driver.jpg"
import Travel from "../assets/travel.jpg"
import Trucks from "../assets/trucks.jpg"
import Traffic from "../assets/traffic.jpg"
import Bmw from "../assets/bmw.jpg"

const products = [
  {
    id: 1,
    title: "1ª habilitação de carro e moto",
    slang: "primeira-habilitacao",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturquidem dolorum voluptatibus et voluptate dolor architecto voluptas!.",
    media: Traffic,
  },
  {
    id: 2,
    title: "Habilitação Onibus e caminhão",
    slang: "habilitacao-especial",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturquidem dolorum voluptatibus et voluptate dolor architecto voluptas!.",
    media: Trucks,
  },
  {
    id: 3,
    title: "Renovação da carteira",
    slang: "renovar-carteira",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturquidem dolorum voluptatibus et voluptate dolor architecto voluptas!.",
    media: Driver,
  },
  {
    id: 4,
    title: "Simulados teóricos",
    slang: "simulados-teoricos",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturquidem dolorum voluptatibus et voluptate dolor architecto voluptas!.",
    media: Bmw,
  },
  {
    id: 5,
    title: "Agendamento de aulas práticas",
    slang: "aulas-praticas",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturquidem dolorum voluptatibus et voluptate dolor architecto voluptas!.",
    media: Travel,
  },
]

export const useProducts = () => {
  return products
}

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang)
}
