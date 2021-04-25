import { http } from './http';
import './websocket/client';

http.listen(8080, () => console.log('Servidor rodando na porta 8080.'));