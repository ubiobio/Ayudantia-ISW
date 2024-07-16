
## Uso de useEffect

### ¿Qué es el hook useEffect en React?

El hook useEffect en React permite ejecutar efectos secundarios en componentes funcionales. Es útil para tareas como la manipulación del DOM, la obtención de datos y la suscripción a eventos. useEffect se ejecuta después del renderizado y puede limpiarse para evitar fugas de memoria. Por ejemplo:

```jsx
import { useState, useEffect } from 'react';

function ExampleComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('Hello, world!');
  }, []);
}
```