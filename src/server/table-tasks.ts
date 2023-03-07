"use strict"

import { TableContext, TableDefinition } from "backend-plus";

export function tasks(context:TableContext):TableDefinition{
    const td:TableDefinition = {
        name: 'tasks',
        fields: [
            {name:'tarea', typeName:'bigint', nullable:false},
            {name:'titulo', typeName:'text'},
            {name:'descripcion', typeName:'text' },
            {name:'asignado_a', typeName:'text' },
            {name:'fecha_creacion', typeName:'date' },
            {name:'operativo', typeName:'text' },
            {name:'estado', typeName:'text' },
            {name:'prioridad', typeName:'text' },
            {name:'reportado_por', typeName:'text' },
            {name:'recibido_por', typeName:'text' },
            {name:'esfuerzo_estimado', typeName:'text' },
            {name:'bloqueado', typeName:'boolean' }
        ],
        primaryKey: ['tarea']
    }
    return td
}