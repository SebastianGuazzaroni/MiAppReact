# MiAppReact - Gestor de Transacciones

Una aplicación React para gestionar ingresos y egresos personales con una interfaz intuitiva y responsiva.

## 🎯 Características

- **Gestión de Transacciones**: Agrega, visualiza y elimina ingresos y egresos
- **Múltiples Vistas**:
  - **Ingresos**: Visualiza todos tus ingresos
  - **Egresos**: Visualiza todos tus egresos
  - **Historial**: Registro completo de todas las transacciones
  - **Resumen**: Vista consolidada con totales de ingresos, egresos y balance general
- **Categorización**: Clasifica transacciones por categoría (Comida/Bebida, Ocio, Alquiler, Ahorros, Varios)
- **Descripciones**: Agrega notas descriptivas a cada transacción
- **Filtrado**: Automático por tipo de transacción
- **Interfaz Responsiva**: Diseño adaptable para diferentes tamaños de pantalla

## 🛠️ Tecnologías

- **React** - Framework JavaScript
- **React Router** - Navegación entre páginas
- **Bootstrap** - Estilos y componentes
- **Vite** - Herramienta de compilación
- **CSS3** - Estilos personalizados

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── AddTransaction.jsx      # Formulario para agregar transacciones
│   ├── NavBar.jsx               # Barra de navegación
│   ├── TransactionItem.jsx      # Componente individual de transacción
│   ├── TransactionList.jsx      # Lista de transacciones
│   └── SampleComponent.jsx      # Componente de ejemplo
├── pages/
│   ├── Ingresos.jsx            # Página de ingresos
│   ├── Egresos.jsx             # Página de egresos
│   ├── Historial.jsx           # Página de historial
│   └── Resumen.jsx             # Página de resumen
├── css/                         # Estilos globales y por componente
├── App.jsx                      # Componente principal
├── main.jsx                     # Punto de entrada
└── index.css                    # Estilos globales
```

## ⚙️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd MiAppReact
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Compilar para producción**
   ```bash
   npm run build
   ```

## 📋 Uso

### Agregar una Transacción

1. Navega a **Ingresos** o **Egresos**
2. Completa el formulario "Agregar Transacción"
3. Selecciona el tipo, categoría, monto y fecha
4. Opcionalmente agrega una descripción
5. Haz clic en "Agregar Transacción"

### Visualizar Transacciones

- **Ingresos**: Ver todas tus entradas de dinero
- **Egresos**: Ver todos tus gastos
- **Historial**: Registro completo ordenado por fecha
- **Resumen**: Vista general con totales y balance

### Eliminar una Transacción

Haz clic en el botón ✕ rojo junto a cualquier transacción para eliminarla

## 🎨 Customización

### Colores y Temas

Los estilos pueden personalizarse editando los archivos CSS en `src/css/`:

- **Ingresos**: Verde (#15be53)
- **Egresos**: Rojo (#ff4757)
- **Fondo**: Gris oscuro (#273951)

### Categorías

Edita las opciones en [AddTransaction.jsx](src/components/AddTransaction.jsx) para agregar o modificar categorías

## 🚀 Mejoras Futuras

- [ ] Autenticación de usuarios
- [ ] Base de datos persistente
- [ ] Gráficos y estadísticas
- [ ] Búsqueda y filtros avanzados


## 📄 Licencia

Este proyecto NO está bajo licencia

## 👨‍💻 Autor

Desarrollado como trabajo práctico de React en UTN Facultad Regional San Francisco, Ingeniería en Sistemas
