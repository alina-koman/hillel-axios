# Users Directory

Невеликий React-застосунок для отримання та відображення списку користувачів.
Дані завантажуються із зовнішнього JSONPlaceholder API, а інтерфейс показує
окремі стани завантаження, успішної відповіді та помилки.

**Демо:** [hillel-axios.vercel.app](https://hillel-axios.vercel.app/)

## Основний функціонал

### Завантаження даних

`DataFetcher` виконує асинхронний запит до API через Axios після монтування
компонента. Отриманий масив користувачів зберігається у state та виводиться
на сторінку у вигляді адаптивних карток.

Для демонстрації процесу очікування перед запитом використовується затримка.
Поки запит виконується, користувач бачить окремий компонент `Loader`.

### Обробка помилок

Помилки Axios перетворюються на зрозумілі об'єкти `Error` у `api.ts`.
`DataFetcher` передає помилку до `ErrorText`, де відображаються:

- заголовок помилки;
- повідомлення від API;
- кнопка **Try again**.

Після натискання **Try again** лічильник спроби змінюється, `useEffect`
повторно запускає запит, а інтерфейс знову переходить у стан завантаження.

Додатково `ErrorBoundary` із пакета `react-error-boundary` захищає застосунок
від помилок, які можуть виникнути під час рендерингу компонентів.

### Suspense і Loader

`App` обгортає основний контент у `Suspense` і передає `Loader` як fallback.
Це забезпечує єдиний компонент для відображення стану очікування, а
`DataFetcher` використовує той самий Loader для свого стану `loading`.

## Структура проєкту

```text
react-hw5/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── api/
│   │   └── api.ts                  # Запит до JSONPlaceholder через Axios
│   ├── assets/                     # Статичні зображення та SVG
│   ├── components/
│   │   ├── App.tsx                 # ErrorBoundary, Suspense і головний layout
│   │   ├── DataFetcher.tsx         # Завантаження та відображення користувачів
│   │   ├── ErrorText.tsx           # Екран помилки та повторний запит
│   │   └── Loader.tsx              # Стан завантаження
│   ├── helpers/
│   │   └── delay.ts                # Допоміжна затримка
│   ├── types/
│   │   └── user.interface.ts       # Тип користувача
│   ├── App.css                    # Глобальні стилі та стилі компонентів
│   └── main.tsx                   # Точка входу React-застосунку
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Технології

- **React** — побудова компонентного інтерфейсу;
- **TypeScript** — типізація компонентів, API-відповіді та станів;
- **Vite** — development-сервер і production-збірка;
- **Axios** — HTTP-запити;
- **react-error-boundary** — обробка помилок рендерингу;
- **Oxlint** — перевірка якості коду.

## Запуск локально

Потрібен встановлений Node.js та npm.

```bash
npm install
npm run dev
```

Після запуску Vite покаже локальну адресу застосунку в терміналі.

## Доступні команди

```bash
npm run dev      # запуск development-сервера
npm run build    # перевірка TypeScript і production-збірка
npm run lint     # перевірка коду через Oxlint
npm run preview  # перегляд production-збірки
```

## API

Застосунок використовує endpoint:

```text
https://jsonplaceholder.typicode.com/users
```

Кожен користувач містить ідентифікатор, ім'я та email:

```ts
type UserInterface = {
  id: number
  name: string
  email: string
}
```
