# Alternador de Modo Oscuro

Una implementación simple y elegante de un alternador de modo oscuro utilizando HTML, CSS y JavaScript.

<p align="center">
    <div style="background-color: #000; padding: 10px 20px; border-radius: 6px; width: fit-content; margin: auto;">
        <a href="./Css/darkModeToggler" style="color: #fff; text-decoration: none; font-weight: bold; ">
            ▶️ Ver Demostración en Video
        </a>
    </div>
</p>

## Características

- Transición suave entre modos claro y oscuro
- Selección de tema persistente usando localStorage
- Diseño responsivo
- Variables CSS personalizables para fácil customización de temas
- Botón de alternación accesible con etiquetas ARIA

## Tecnologías Utilizadas

- HTML5
- CSS3 (Propiedades Personalizadas, Transiciones)
- Tailwind CSS
- JavaScript (ES6+)
- API de LocalStorage

## Detalles de Implementación

El proyecto utiliza propiedades personalizadas de CSS (variables) para gestionar los colores del tema. El alternador de tema se implementa usando JavaScript para:

1. Cambiar entre modos claro/oscuro
2. Guardar la preferencia del usuario en localStorage
3. Detectar la preferencia del esquema de colores del sistema
4. Aplicar transiciones suaves entre temas

## Uso

1. Incluye los archivos CSS y JavaScript en tu proyecto
2. Añade el marcado HTML del botón alternador
3. Personaliza las variables de color en el archivo CSS
4. El tema se mantendrá automáticamente entre recargas de página