```mermaid
sequenceDiagram
    participant browser
    participant server

    browser-->server: POST http://fullstack-exampleapp.herokuapp.com/new_note_spa
    activate server
    server-->>broser: HTTP-status 201
    deactivate server
```