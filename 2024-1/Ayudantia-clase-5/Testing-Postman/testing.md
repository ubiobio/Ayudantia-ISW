
## ¿Qué es testing?

El testing es el proceso de evaluar un sistema o parte de un sistema para detectar cualquier diferencia entre el resultado observado y el esperado. En el contexto del desarrollo de software, el testing se refiere específicamente a la actividad de verificar y validar que un software cumple con los requisitos especificados y funciona correctamente.

## Tipos de testing

1. **Pruebas de unidad (Unit Testing):** Se centran en probar unitariamente las distintas funciones, métodos o clases, de forma aislada para garantizar que funcionen correctamente.
2. **Pruebas de integración (Integration Testing):** Verifican que los diferentes módulos o componentes de un sistema funcionen juntos correctamente después de ser integrados.
3. **Pruebas de sistema (System Testing):** Evalúan el sistema completo como una entidad única para verificar que cumpla con los requisitos especificados. Estas pruebas se realizan en un entorno que simula el ambiente de producción.
4. **Pruebas de aceptación (Acceptance Testing):** Se llevan a cabo para validar si el sistema cumple con los criterios de aceptación establecidos por el cliente o los stakeholders.
5. **Pruebas de rendimientos (Performance Testing):** Evalúan el rendimiento del sistema bajo diferentes condiciones de carga, como el número de usuarios concurrentes, el volumen de datos y la velocidad de respuesta.
6. **Pruebas de regresión (Regression Testing):** Verifican que los cambios recientes en el código no hayan introducido nuevos errores y que las funcionalidades existentes sigan funcionando correctamente.

## ¿Por que es bueno realizar pruebas de unidad a nuestra API?

Realizar pruebas unitarias en nuestra API es fundamental por varias razones:

1. **Validación de la funcionalidad:** Las pruebas unitarias te permiten verificar que cada componente de tu API funciona correctamente según lo implementado. Esto te ayuda a identificar y corregir errores antes de que se propaguen a otras partes de tu sistema.
2. **Garantía de calidad:** Al tener pruebas unitarias sólidas, puedes tener más confianza en la calidad de tu código. Esto es especialmente importante cuando se realizan cambios o actualizaciones en el código, ya que las pruebas te ayudan a asegurar que las nuevas implementaciones no rompan el comportamiento existente.
3. **Facilita la detección temprana de errores:** Las pruebas unitarias pueden detectar errores en una etapa temprana del ciclo de desarrollo, lo que facilita y acelera su corrección.
4. **Documentación viva:** Las pruebas unitarias bien escritas pueden servir como documentación viva de tu API. Proporcionan ejemplos claros de cómo usar cada función o endpoint y qué resultados esperar, lo que facilita su comprensión para otros desarrolladores que trabajen en el proyecto.
5. **Facilita la refactorización:** Cuando necesites realizar cambios en tu código, las pruebas unitarias te dan la confianza para refactorizar sin temor a romper la funcionalidad existente. Si las pruebas continúan pasando después de la refactorización, puedes estar seguro de que el comportamiento de tu API sigue siendo el mismo.