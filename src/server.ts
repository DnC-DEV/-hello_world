import * as express from "express";

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hello world!');
});

app.get('/soft', (request, response) => {
    response.send('MENTALIDADES:<br>'+
                  'Persistencia<br>Responsabilidade Pessoal<br>Orientação ao futuro<br>Mentalidade de Crescimento<br>'+
                  '<br>HABILIDADES:<br>Trabalho em equipe<br>Atenção aos detalhes<br>Proatividade<br>Comunucação');
});
app.get('/obj', (request, response) => {
    response.send('Desenvolver melhor o aprendizado em banco de dados');
});

app.listen(3000, () => {
    console.log(`Server is running at port ${port}`)
});