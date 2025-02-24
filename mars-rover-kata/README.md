## 🚀 Mars Rover Kata

En este ejercicio programamos un vehículo explorador para moverse por Marte siguiendo una serie de comandos.

### 📌 Reglas del Rover

1. **Se mueve en una cuadrícula** con coordenadas `(x, y)`.
2. **Tiene una dirección inicial** (`N`, `S`, `E`, `W`).
3. **Recibe comandos** para moverse:
   - `"f"` → Avanzar
   - `"b"` → Retroceder
   - `"l"` → Girar a la izquierda
   - `"r"` → Girar a la derecha
4. **El mapa es esférico**, si el rover sale de un borde, aparece en el lado opuesto.
5. **Si encuentra un obstáculo, se detiene antes de chocar.**
