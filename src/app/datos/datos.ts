import { TaskCategory } from "../entity/Task";

export const TASKS = [
  { id: '1', title: 'Comprar leche', category: TaskCategory.Shopping, expiration: new Date('2023-04-15'), description: 'Ir al supermercado y comprar leche descremada', completed: false },
  { id: '2', title: 'Hacer la compra semanal', category: TaskCategory.Shopping, expiration: new Date('2023-04-16'), description: 'Comprar frutas, verduras, carne y pan para la semana', completed: true },
  { id: '3', title: 'Pagar la factura de la luz', category: TaskCategory.Personal, expiration: new Date('2023-04-20'), description: 'Pagar la factura de la luz en línea antes de la fecha límite', completed: false },
  { id: '4', title: 'Enviar el informe trimestral', category: TaskCategory.Work, expiration: new Date('2023-04-30'), description: 'Completar y enviar el informe trimestral antes de la fecha límite', completed: false },
  { id: '5', title: 'Llamar al médico', category: TaskCategory.Personal, expiration: new Date('2023-05-01'), description: 'Hacer una cita para una revisión médica anual', completed: false },
  { id: '6', title: 'Ir al cine', category: TaskCategory.Entertainment, expiration: new Date('2023-04-18'), description: 'Ver la última película de acción en el cine', completed: false }
];
