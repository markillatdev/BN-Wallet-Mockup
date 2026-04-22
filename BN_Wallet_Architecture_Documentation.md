# Documentación de Arquitectura - BN Wallet

## Banco de la Nación del Perú

---

## 1. Descripción General del Proyecto

**BN Wallet** es una aplicación de billetera móvil desarrollada para el **Banco de la Nación del Perú** que permite a los ciudadanos peruanos (servidores públicos, pensionistas y beneficiarios de programas sociales) gestionar sus fondos estatales de manera digital y segura.

La aplicación contempla dos vistas principales:
- **App Móvil**: Aplicación para usuarios finales (ciudadanos)
- **Panel Web Administrativo**: Sistema de administración para el banco

---

## 2. Stack Tecnológico

### Frontend
- **Framework**: React 18.3.1 con TypeScript
- **Build Tool**: Vite 6.3.5
- **Estilos**: Tailwind CSS 4.1.12
- **Componentes UI**: Radix UI (primitives), shadcn/ui, Material UI (MUI) 7.3.5
- **Iconos**: Lucide React, Material Icons
- **Gráficos**: Recharts, Chart.js
- **Animaciones**: Motion (framer-motion)
- **Formularios**: React Hook Form
- **Enrutamiento**: React Router 7

### Infraestructura
- **Plataforma**: Web (Responsive)
- **Node.js**: Entorno de ejecución

---

## 3. Arquitectura de la Aplicación

### 3.1 Estructura de Componentes

```
src/
├── app/
│   ├── components/
│   │   ├── mobile/          # Pantallas de la app móvil
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── DashboardScreen.tsx
│   │   │   ├── TransferScreen.tsx
│   │   │   ├── QRPaymentScreen.tsx
│   │   │   ├── HistoryScreen.tsx
│   │   │   ├── CreditRequestScreen.tsx
│   │   │   └── PensionScreen.tsx
│   │   │
│   │   ├── web/             # Módulos del panel administrativo
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── UserManagement.tsx
│   │   │   ├── CreditApproval.tsx
│   │   │   ├── PLAFTMonitoring.tsx
│   │   │   └── CashLogistics.tsx
│   │   │
│   │   ├── ui/              # Componentes reutilizables (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── table.tsx
│   │   │   └── [otros componentes Radix UI]
│   │   │
│   │   ├── MobileBottomNav.tsx
│   │   ├── WebSidebar.tsx
│   │   └── figma/
│   │
│   └── App.tsx              # Componente raíz con navegación principal
│
├── styles/
│   ├── index.css
│   ├── theme.css
│   ├── tailwind.css
│   └── fonts.css
│
└── main.tsx
```

### 3.2 Navegación Principal

El componente `App.tsx` controla dos modos de vista:
- **viewMode**: `'mobile' | 'web'`
- **mobileScreen**: Estados para navegación móvil
- **webScreen**: Estados para navegación web

---

## 4. Módulos de la Aplicación Móvil

### 4.1 LoginScreen (Autenticación)
**Funcionalidades:**
- Inicio de sesión con DNI y contraseña
- Autenticación biométrica (huella dactilar)
- Reconocimiento facial
- Recuperación de contraseña
- Aceptación de términos y condiciones

**Campos del formulario:**
- Número de DNI (8 dígitos)
- Contraseña

### 4.2 DashboardScreen (Panel Principal)
**Funcionalidades:**
- Visualización de saldo disponible
- Botones de acción rápida:
  - Transferir
  - Pagar (QR)
  - Recargar
  - Historial
- Lista de últimos movimientos
- Acceso a crédito pre-aprobado (Multired)

**Datos mostrar:**
- Saldo actual
- Próximo pago programado
- Historial de movimientos (ingresos/egresos)

### 4.3 TransferScreen (Transferencias)
**Funcionalidades:**
- Transferencias por número celular
- Transferencias por DNI
- Compatibilidad con Yape y Plin
- Selección de banco destino
- Concepto de transferencia
- Cálculo de comisiones

**Campos del formulario:**
- Método de transferencia (Celular/DNI)
- Número de celular / DNI del destinatario
- Monto a transferir
- Concepto (opcional)
- Banco destino

### 4.4 QRPaymentScreen (Pagos QR)
**Funcionalidades:**
- Escaneo de códigos QR de comercios
- Manual: Ingreso de monto manualmente
- Confirmación de pago
- Visualización de códigos QR guardados

**Campos del formulario:**
- Comercio (detectable vía QR)
- Monto a pagar
- Saldo disponible

### 4.5 HistoryScreen (Historial)
**Funcionalidades:**
- Lista completa de movimientos
- Búsqueda por comercio, monto o fecha
- Filtros por tipo (Ingreso/Egreso)
- Filtros por fecha
- Estados de transacción (Completado/Pendiente/Observado)
- Exportación de historial

**Datos de cada movimiento:**
- Tipo (Ingreso/Egreso)
- Descripción
- Monto
- Fecha y hora
- Estado

### 4.6 CreditRequestScreen (Solicitud de Crédito)
**Funcionalidades:**
- Visualización de monto pre-aprobado
- Simulación de crédito
- Selección de plazo (3, 6, 12, 18, 24 meses)
- Selección de propósito del crédito
- Cálculo de cuota mensual
- Total a pagar e intereses
- Envío de solicitud

**Parámetros del crédito:**
- Monto solicitado (S/ 500 - S/ 5,000)
- Plazo (meses)
- Propósito (personal, educación, salud, negocio, vivienda)
- TEA: 25% anual

### 4.7 PensionScreen (Cobro de Pensión)
**Funcionalidades:**
- Visualización de depósito de pensión
- Detalles del depósito:
  - Tipo de pago
  - Entidad origen (ESSALUD, MEF, etc.)
  - Período
  - Fecha de depósito
  - Número de operación
- Próximos pagos programados
- Transferir fondos
- Descargar comprobante

---

## 5. Módulos del Panel Administrativo Web

### 5.1 AdminDashboard
**Funcionalidades:**
- Métricas en tiempo real:
  - Transacciones del día
  - Usuarios activos
  - Monto procesado
  - Alertas de riesgos pendientes
- Gráficos de transacciones por día
- Gráficos de crecimiento de usuarios
- Tabla de operaciones sospechosas recientes

**KPIs:**
- Transacciones hoy: ~24,573
- Usuarios activos: 289,450
- Monto procesado hoy: S/ 8.5M
- Alertas de riesgos: 18 pendientes

### 5.2 UserManagement
**Funcionalidades:**
- Listado de usuarios registrados
- Búsqueda por DNI, nombre o teléfono
- Filtros por tipo de usuario:
  - Servidores Públicos
  - Pensionistas
  - Beneficiarios Sociales
- Estados de cuenta: Activo, Pendiente, Bloqueado
- Información de saldo y última actividad
- Exportación de datos
- Gestión de usuarios (acciones)

**Datos de usuario:**
- DNI
- Nombre completo
- Tipo de usuario
- Estado
- Saldo actual
- Teléfono
- Última actividad

### 5.3 CreditApproval
**Funcionalidades:**
- Evaluación de solicitudes de crédito Multired
- Scoring crediticio automático
- Evaluación de capacidad de pago
- Historial de pagos
- Relación deuda/ingreso
- Simulación de cuota
- Aprobación/Rechazo de solicitudes
- Observaciones del analista

**Datos de evaluación:**
- Monto solicitado
- Plazo
- Score crediticio
- Ingreso mensual
- Capacidad de pago
- Historial de pagos
- Relación deuda/ingreso
- Riesgo (Bajo/Medio/Alto)

### 5.4 PLAFTMonitoring
**Prevención de Lavado de Activos y Financiamiento del Terrorismo**

**Funcionalidades:**
- Alertas por nivel de riesgo (Alto/Medio/Bajo)
- Detección de patrones sospechosos:
  - Múltiples transferencias fraccionadas
  - Patrones inusuales de retiros
  - Incremento súbito de transacciones
  - Recepción de fondos inusuales
  - Operaciones fuera de perfil
  - Transferencias internacionales
- Investigación de casos
- Reportes a UIF (Unidad de Inteligencia Financiera)
- Notas de investigación
- Estados: Pendiente, En investigación, Resuelto

### 5.5 CashLogistics
**Gestión de Efectivo y Reposición**

**Funcionalidades:**
- Mapa de calor por región
- Control de niveles de efectivo:
  - Nivel óptimo (≥60%)
  - Normal (30-60%)
  - Bajo (15-30%)
  - Crítico (<15%)
- Órdenes de reposición
- Seguimiento de envíos
- Estados: Pendiente, En tránsito, Entregado

**Datos por región:**
- Número de agencias
- Cajeros ATM
- Efectivo disponible
- Porcentaje de capacidad
- Estado

---

## 6. Actores del Sistema

### 6.1 Actores - App Móvil
| Actor | Descripción |
|-------|-------------|
| **Servidor Público** | Empleado estatal que recibe su sueldo via BN Wallet |
| **Pensionista** | Jubilado que recibe su pensión del Estado |
| **Beneficiario Social** | Usuario de programas sociales (JUNTOS, etc.) |

### 6.2 Actores - Panel Web
| Actor | Descripción |
|-------|-------------|
| **Administrador** | Usuario con acceso completo al sistema |
| **Analista de Créditos** | Evalúa y aprueba/rechaza solicitudes de crédito |
| **Analista PLAFT** | Investiga operaciones sospechosas |
| **Operador de Logística** | Gestiona reposición de efectivo |

---

## 7. Modelos de Datos (Entidades)

### 7.1 Usuario
```
- id: number
- dni: string (8 dígitos)
- nombreCompleto: string
- tipoUsuario: 'Servidor Público' | 'Pensionista' | 'Beneficiario Social'
- estado: 'Activo' | 'Pendiente' | 'Bloqueado'
- saldo: number
- telefono: string
- email: string (opcional)
- fechaRegistro: Date
- ultimaActividad: Date
```

### 7.2 Movimiento
```
- id: number
- idUsuario: number
- tipo: 'Ingreso' | 'Egreso'
- descripcion: string
- monto: number
- fecha: Date
- hora: string
- estado: 'Completado' | 'Pendiente' | 'Observado'
- metodo: 'Transferencia' | 'Pago QR' | 'Depósito' | 'Retiro'
```

### 7.3 SolicitudCredito
```
- id: number
- idUsuario: number
- montoSolicitado: number
- plazoMeses: number
- proposito: string
- scoreCrediticio: number
- ingresoMensual: number
- estado: 'Pendiente' | 'Aprobado' | 'Rechazado'
- nivelRiesgo: 'Bajo' | 'Medio' | 'Alto'
- fechaSolicitud: Date
- evaluacionAutomatica: EvaluacionCrediticia
```

### 7.4 AlertaPLAFT
```
- id: number
- idUsuario: number
- nivelRiesgo: 'Alto' | 'Medio' | 'Bajo'
- tipoAlerta: string
- numeroOperaciones: number
- montoTotal: number
- periodo: string
- patronDetectado: string
- fechaAlerta: Date
- estado: 'Pendiente' | 'En Investigación' | 'Resuelto'
- idAnalista: number (opcional)
- reporteUIF: boolean
```

### 7.5 Region
```
- id: number
- nombre: string
- numeroAgencias: number
- numeroCajeros: number
- efectivoDisponible: number
- porcentajeCapacidad: number
- nivel: 'Óptimo' | 'Normal' | 'Bajo' | 'Crítico'
```

### 7.6 OrdenReposicion
```
- id: number
- idRegion: number
- monto: number
- estado: 'Pendiente' | 'En Tránsito' | 'Entregado'
- fechaCreacion: Date
- fechaEntregaEstimada: Date
- prioridad: 'Normal' | 'Urgente'
```

### 7.7 Pension
```
- id: number
- idUsuario: number
- tipoPago: 'Jubilación' | 'Invalidez' | 'Sobrevivencia'
- entidadOrigen: string
- periodo: string
- monto: number
- fechaDeposito: Date
- numeroOperacion: string
```

---

## 8. Casos de Uso Principales

### 8.1 Casos de Uso - App Móvil

| # | Caso de Uso | Descripción |
|---|-------------|-------------|
| CU-01 | Iniciar Sesión | El usuario se autentica con DNI y contraseña o biométricos |
| CU-02 | Consultar Saldo | El usuario visualiza su saldo disponible |
| CU-03 | Realizar Transferencia | El usuario transfiere dinero a otra cuenta |
| CU-04 | Pagar con QR | El usuario paga escaneando código QR de un comercio |
| CU-05 | Ver Historial | El usuario consulta todos sus movimientos |
| CU-06 | Solicitar Crédito | El usuario solicita un crédito Multired |
| CU-07 | Ver Detalles de Pensión | El usuario consulta los detalles de su pensión depositada |
| CU-08 | Exportar Comprobante | El usuario descarga comprobante de operación |

### 8.2 Casos de Uso - Panel Web

| # | Caso de Uso | Descripción |
|---|-------------|-------------|
| CU-10 | Ver Dashboard | El admin visualiza métricas y estadísticas globales |
| CU-11 | Buscar Usuario | El admin busca usuarios por DNI, nombre o teléfono |
| CU-12 | Gestionar Usuario | El admin puede bloquear/desbloquear cuentas |
| CU-13 | Evaluar Crédito | El analista evalúa y aprueba/rechaza solicitudes |
| CU-14 | Investigar Alerta | El analista PLAFT investiga operaciones sospechosas |
| CU-15 | Reportar a UIF | El analista reporta caso a la UIF |
| CU-16 | Ver Nivel de Efectivo | El operador consulta niveles de efectivo por región |
| CU-17 | Crear Orden de Reposición | El operador crea orden de reposición de efectivo |
| CU-18 | Exportar Datos | El admin exporta listados a Excel/CSV |

---

## 9. Reglas de Negocio Importantes

### 9.1 Transferencias
- Las transferencias entre BN Wallet son instantáneas y gratuitas
- Compatible con Yape y Plin (interoperabilidad)
- Límites configurable por tipo de usuario

### 9.2 Créditos Multired
- Monto máximo: S/ 5,000
- Monto mínimo: S/ 500
- TEA: 25% anual
- Plazos disponibles: 3, 6, 12, 18, 24 meses
- El descuento se hace automáticamente del sueldo/pensión

### 9.3 Seguridad PLAFT
- Monitoreo automático de patrones sospechosos
- Transferencias fraccionadas (estructuración)
- Retiros fuera de ciudad de residencia
- Alta frecuencia de transacciones
- Operaciones internacionales

### 9.4 Pensiones
- Depósitos los días 15 de cada mes
- Disponible inmediatamente tras depósito
- Comprobante descargable

---

## 10. Integraciones Externas

- **Yape**: interoperabilidad de transferencias
- **Plin**: interoperabilidad de pagos
- **UIF**: reporte de operaciones sospechosas
- **ESSALUD**: consulta de pensionistas
- **MEF**: consulta de servidores públicos
- **JUNTOS**: consulta de beneficiarios sociales

---

## 11. Consideraciones de Diseño

### 11.1 Paleta de Colores
- **Primario**: #C8102E (Rojo Banco de la Nación)
- **Secundario**: #9E0C24 (Rojo oscuro)
- **Fondo**: #F3F4F6 (Gray-100)
- **Blanco**: #FFFFFF

### 11.2 Responsive Design
- Mobile: Diseño emulado en dispositivo de 375x700px
- Web: Dashboard administrativo con sidebar

### 11.3 Accesibilidad
- Contraste suficiente en textos
- Botones con estados visuales claros
- Formularios con etiquetas descriptivas

---

## 12. Futuras Expansiones Sugeridas

- Implementación de backend con API REST
- Base de datos relacional (PostgreSQL)
- Autenticación con OAuth2
- Notificaciones push
- App nativa iOS/Android
- Funcionalidad de recarga de saldo
- Pago de servicios (luz, agua, teléfono)
- Bloqueo de tarjeta/wallet remoto

---

## 13. Contacto del Proyecto

- **Organización**: Banco de la Nación del Perú
- **Nombre del Proyecto**: BN Wallet
- **Versión Actual**: 0.0.1

---

*Documento generado para análisis arquitectónico y diseño de diagramas UML*