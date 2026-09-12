# 📧 Integración de EmailJS - Guía de Configuración

## ✅ Estado Actual

La integración de EmailJS ya está implementada en el formulario de contacto. Ahora necesitas configurar las credenciales de EmailJS.

## 🔧 Pasos para Completar la Integración

### 1. Registrarse en EmailJS (si aún no lo hiciste)

1. Visita [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Crea una cuenta o inicia sesión
3. Verifica tu email

### 2. Obtener las Credenciales Necesarias

#### Obtener la Public Key:
1. Ve a **Account Settings** en el dashboard
2. En la sección **API Keys**, copia tu **Public Key**
3. Esta es la clave que usarás en el frontend

#### Crear un Servicio de Email (Service):
1. Ve a **Email Services** en el dashboard
2. Click en **Add Service**
3. Elige tu proveedor (Gmail, Outlook, etc.)
4. Sigue los pasos para conectar tu email
5. Copia el **Service ID**

#### Crear un Template de Email (Template):
1. Ve a **Email Templates** en el dashboard
2. Click en **Create New Template**
3. Configura tu template con las siguientes variables:

```
Remitente: {{from_name}} <{{from_email}}>
Empresa: {{company}}
Teléfono: {{phone}}
Mensaje: {{message}}
Reply-To: {{reply_to}}
```

Las variables disponibles en el código son:
- `from_name` - Nombre del usuario
- `from_email` - Email del usuario
- `company` - Empresa (o "No especificada" si está vacía)
- `phone` - Teléfono (o "No especificado" si está vacío)
- `message` - Consulta del usuario
- `reply_to` - Email para responder

4. Copia el **Template ID**

### 3. Configurar Variables de Entorno

#### En Desarrollo:
1. Crea un archivo `.env.local` en la raíz del proyecto (próximo a `package.json`)
2. Completa con tus credenciales:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
```

⚠️ **IMPORTANTE**: No commitear `.env.local` en git (ya está en `.gitignore`)

#### En Producción:
1. Configura las mismas variables de entorno en tu plataforma de hosting
2. Para Vercel: **Settings → Environment Variables**
3. Para otras plataformas: consulta su documentación

### 4. Verificar la Integración

#### Iniciar el servidor de desarrollo:
```bash
npm run dev
```

#### Probar el formulario:
1. Ve a `http://localhost:3000/contacto`
2. Completa el formulario con datos válidos
3. Haz click en "Enviar consulta"
4. Deberías ver un mensaje de éxito
5. Verifica que el email llegó a tu bandeja

#### Troubleshooting:
- Si ves error "EmailJS Public Key no está configurada": asegúrate de que `.env.local` está en la raíz del proyecto
- Si el formulario no se envía: revisa la consola del navegador (F12) para ver errores
- Si el email no llega: verifica que el Service está conectado correctamente en el dashboard

## 📝 Notas sobre Seguridad

- La **Public Key** de EmailJS es pública por diseño (está visible en el navegador)
- **NUNCA** incluyas credenciales privadas en el código
- El frontend solo puede ver variables que comiencen con `NEXT_PUBLIC_`
- No commitear `.env.local` con credenciales reales

## 🧪 Validaciones Implementadas

El formulario valida los siguientes campos:

### Nombre
- ✓ Obligatorio
- ✓ 2-80 caracteres
- ✓ No solo espacios

### Empresa
- ✓ Opcional
- ✓ Si se completa: 2-120 caracteres
- ✓ No solo espacios

### Email
- ✓ Obligatorio
- ✓ Formato válido (algo@dominio.algo)
- ✓ Máximo 50 caracteres
- ✓ Sin espacios

### Teléfono
- ✓ Opcional
- ✓ Si se completa: al menos 7 dígitos
- ✓ Permite +, espacios, guiones, paréntesis
- ✓ Máximo 20 caracteres

### Consulta
- ✓ Obligatorio
- ✓ 7-1000 caracteres
- ✓ Se muestra contador de caracteres

## 🎯 Características Implementadas

✅ Validación robusta de todos los campos  
✅ Sanitización y normalización de datos  
✅ Estado de carga con spinner en el botón  
✅ Prevención de envíos duplicados  
✅ Mensajes de error específicos y claros  
✅ Mensaje de éxito después del envío  
✅ Limpieza automática del formulario tras envío exitoso  
✅ Integración con sonner para notificaciones  
✅ Estilo consistente con el diseño existente  
✅ Tipado completo con TypeScript  
✅ Variables de entorno seguras  

## 📦 Dependencias Agregadas

- `@emailjs/browser` - Librería para enviar emails desde el frontend

## 📁 Archivos Nuevos/Modificados

### Nuevos:
- `lib/validators.ts` - Validadores para cada campo
- `lib/emailjs.ts` - Utilidades para integración con EmailJS
- `.env.example` - Plantilla de variables de entorno

### Modificados:
- `components/ContactForm.tsx` - Integración de validación y EmailJS

## 🚀 Próximos Pasos

1. Configura las credenciales de EmailJS como se describe arriba
2. Prueba el formulario en desarrollo
3. Antes de deployar a producción, configura las variables de entorno en tu hosting
4. Verifica que el formulario funciona correctamente en la versión deployada
