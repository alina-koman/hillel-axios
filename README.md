# Users Directory

React-застосунок для отримання та відображення списку користувачів із
JSONPlaceholder API.

**Демо:** [hillel-axios.vercel.app](https://hillel-axios.vercel.app/)

## Що реалізовано

- отримання користувачів через Axios;
- типізація даних за допомогою TypeScript;
- затримка запиту для демонстрації стану завантаження;
- окремий Loader під час очікування відповіді;
- `Suspense` для fallback-стану;
- `ErrorBoundary` для обробки помилок рендерингу;
- зрозумілий екран помилки з повідомленням;
- повторний запит кнопкою **Try again**;
- адаптивний список користувачів у вигляді карток.

## Технології

- React
- TypeScript
- Vite
- Axios
- `react-error-boundary`

## Запуск локально

```bash
npm install
npm run dev
```

Застосунок буде доступний за адресою, яку покаже Vite у терміналі.

## Доступні команди

```bash
npm run dev      # запуск development-сервера
npm run build    # перевірка типів і production-збірка
npm run lint     # перевірка коду
npm run preview  # перегляд production-збірки
```

## API

Дані завантажуються з:

```text
https://jsonplaceholder.typicode.com/users
```
