const staticConfigYaml = `
server:
  port: 3022
  session-store: memory-saved
db:
  motor: postgresql
  host: localhost
  database: tareas_plus
  schema: tareas
  user: tareas_plus_admin
client-setup:
  menu: true
  lang: es
  user-scalable: no
install:
  dump:
    db:
      owner: tareas_plus_owner
      owner4special-scripts: tareas_plus_owner
      user4special-scripts: tareas_plus_user
`;

export default staticConfigYaml;