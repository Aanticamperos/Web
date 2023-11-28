const zapatos = [
    {
        id:0,
        imagen: "https://i.pinimg.com/736x/2a/cb/3c/2acb3c2614dc2c951cda4984f260f399.jpg",
        marca: "Nike",
        referencia: "Air force one",
        color: "Negro",
        talla: "Hombre",
        precio: 120000,
        calidad: "1.1",
        cierre: "Cordones",
        vendidos:10,
        disponibilidad: 50
    },
    {   
        id:1,
        imagen: "https://www.shutterstock.com/image-photo/kent-uk-01012023-adidas-originals-600nw-2278627365.jpg",
        marca: "Adidas",
        referencia: "SuperStar",
        color: "Negro y Blanco",
        talla: "Dama",
        precio: 140000,
        calidad: "Triple A",
        cierre: "Cordones",
        vendidos:10,
        disponibilidad: 10
    },
    {   
        id:2,
        imagen: "https://images.prismic.io/sneakql/df16ca85-24b2-4429-a855-fb56237f2631_57.png?auto=format&ar=1%3A0.6666666666666666&fit=crop&ixlib=react-9.7.0&w=580",
        marca: "Jordan",
        referencia: "Retro 1",
        color: "Negro y blanco",
        talla: "Hombre",
        precio: 120000,
        calidad: "1.1",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 100
    },
    {   
        id:3,
        imagen: "https://falabella.scene7.com/is/image/FalabellaCO/33737010_1?wid=1500&hei=1500&qlt=70",
        marca: "Puma",
        referencia: "Roma",
        color: "Blanco y azul",
        talla: "Hombre",
        precio: 150000,
        calidad: "Triple A",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 50
    },
    {   
        id:4,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiXoFEhyvjCesa-PBzmUow2i1ajhRPgEXSIGKbMOnvQ&s",
        marca: "Adidas",
        referencia: "Samba",
        color: "Verde",
        talla: "Dama",
        precio: 125000,
        calidad: "Triple A",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 5
    },
    {   
        id:5,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tFmTLpN_2lTM3osDMy2ziCEKfVfZZQuOTtArtWxEfA&s",
        marca: "Nike",
        referencia: "Air force one",
        color: "Blanco",
        talla: "Hombre",
        precio: 120000,
        calidad: "1.1",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 0
    },
    {   
        id:6,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdufo6OeNcxM3TnG9M-CIHOGkyWl-MCKvOug7tBE&s",
        marca: "Nike",
        referencia: "Air force one",
        color: "Azul",
        talla: "Hombre",
        precio: 120000,
        calidad: "1.1",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 1
    },
    {   
        id:7,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFZaTWKerT_H9Q6HQ7PuoMpAvgNaHiYbAZQCMw9Fnqg&s://i.pinimg.com/736x/2a/cb/3c/2acb3c2614dc2c951cda4984f260f399.jpg",
        marca: "Nike",
        referencia: "Air force one",
        color: "roja",
        talla: "Hombre",
        precio: 120000,
        calidad: "1.1",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 78
    },
    {   
        id:8,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJ5wy0c1u-Knl09ya4KwwBx1yPne9cpWm9Fn_8I9ieA&s",
        marca: "Nike",
        referencia: "Air force one",
        color: "Multicolor",
        talla: "Dama",
        precio: 120000,
        calidad: "1.1",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 37
    },
    {   
        id:9,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrruz6zFKUuM85lrAs8hMmH30qzq-SvMSb7Q&usqp=CAU",
        marca: "Nike",
        referencia: "Retro 1",
        color: "Negro y Rojo",
        talla: "Hombre",
        precio: 120000,
        calidad: "1.1",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 9
    },
    {   
        id:10,
        imagen: "https://thesoleprovider.co.za/cdn/shop/products/mocha.jpg?v=1664370043",
        marca: "Nike",
        referencia: "Air force one",
        color: "Negro y blanca",
        talla: "Hombre",
        precio: 120000,
        calidad: "1.1",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 2
    },
    {   
        id:11,
        imagen: "https://i.ebayimg.com/images/g/IvcAAOSwq-BeUIaF/s-l1600.jpg",
        marca: " Bota",
        referencia: "Payaso",
        color: "Multicolor",
        talla: "Hombre",
        precio: 120000,
        calidad: "Triple a",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 60
    },
    {   
        id:12,
        imagen: "https://standshop.com.co/wp-content/uploads/2022/11/84a12fbc-ea17-4e08-b879-f389dc8a2c73.jpg",
        marca: "Adidas",
        referencia: "Forum",
        color: "Blanca y azul",
        talla: "Hombre",
        precio: 120000,
        calidad: "Triple A",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 100
    },
    {   
        id:13,
        imagen: "https://i.pinimg.com/736x/2a/cb/3c/2acb3c2614dc2c951cda4984f260f399.jpg",
        marca: "Nike",
        referencia: "Air force one",
        color: "Negro",
        talla: "Hombre",
        precio: 120000,
        calidad: "1.1",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 50
    },
    {   
        id:14,
        imagen: "https://i.pinimg.com/736x/2a/cb/3c/2acb3c2614dc2c951cda4984f260f399.jpg",
        marca: "Nike",
        referencia: "Air force one",
        color: "Negro",
        talla: "Hombre",
        precio: 120000,
        calidad: "1.1",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 50
    },
    {   id:15,
        imagen: "https://indumentishop.com.co/wp-content/uploads/2022/06/superstar-blanca.jpg",
        marca: "Adidas",
        referencia: "Superstar",
        color: "Blanco",
        talla: "Hombre",
        precio: 130000,
        calidad: "1.0",
        cierre: "Cordones",
        ofertaEspecial: true,
        disponibilidad: 30
    },    
    {   
        id:16,
        imagen: "https://static.dafiti.com.co/images/1x1.gif",
        marca: "Converse",
        referencia: "Chuck Taylor All Star",
        color: "Rojo",
        talla: "Mujer",
        precio: 90000,
        calidad: "1.2",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 20
    }, 
    {   
        id:17,
        imagen: "https://falabella.scene7.com/is/image/FalabellaCO/117440248_1?wid=1500&hei=1500&qlt=70",
        marca: "Puma",
        referencia: "Suede Classic",
        color: "Azul",
        talla: "Hombre",
        precio: 110000,
        calidad: "1.1",
        cierre: "Cordones",
        ofertaEspecial: true,
        disponibilidad: 40
    }, 
    {   
        id:18,
        imagen: "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2022/03/01/621e1f941c825.r_d.156-423-11451.jpeg",
        marca: "Vans",
        referencia: "Old Skool",
        color: "Negro",
        talla: "Unisex",
        precio: 95000,
        calidad: "1.0",
        cierre: "Cordones",
        ofertaEspecial: false,
        disponibilidad: 25
    },
    {   
        id:19,
        imagen: "https://sportzone.vtexassets.com/arquivos/ids/182770/GY0952-TenisReebokClassicLeather-Reebok-Hombre-2.jpg?v=638258279579200000",
        marca: "Reebok",
        referencia: "Classic Leather",
        color: "Blanco",
        talla: "Mujer",
        precio: 100000,
        calidad: "1.2",
        cierre: "Cordones",
        ofertaEspecial: true,
        disponibilidad: 35
        },
        {   
            id:5,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tFmTLpN_2lTM3osDMy2ziCEKfVfZZQuOTtArtWxEfA&s",
            marca: "Nike",
            referencia: "Air force one",
            color: "Blanco",
            talla: "Hombre",
            precio: 120000,
            calidad: "1.1",
            cierre: "Cordones",
            ofertaEspecial: false,
            disponibilidad: 0
        },
        {   
            id:5,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tFmTLpN_2lTM3osDMy2ziCEKfVfZZQuOTtArtWxEfA&s",
            marca: "Nike",
            referencia: "Air force one",
            color: "Blanco",
            talla: "Hombre",
            precio: 120000,
            calidad: "1.1",
            cierre: "Cordones",
            ofertaEspecial: false,
            disponibilidad: 0
        },
        {   
            id:5,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tFmTLpN_2lTM3osDMy2ziCEKfVfZZQuOTtArtWxEfA&s",
            marca: "Nike",
            referencia: "Air force one",
            color: "Blanco",
            talla: "Hombre",
            precio: 120000,
            calidad: "1.1",
            cierre: "Cordones",
            ofertaEspecial: false,
            disponibilidad: 0
        },
        {   
            id:5,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tFmTLpN_2lTM3osDMy2ziCEKfVfZZQuOTtArtWxEfA&s",
            marca: "Nike",
            referencia: "Air force one",
            color: "Blanco",
            talla: "Hombre",
            precio: 120000,
            calidad: "1.1",
            cierre: "Cordones",
            ofertaEspecial: false,
            disponibilidad: 0
        }
    
];

const zapatosMostrados = [];

const elementosPorPagina = 10;
        let paginaActual = 1;

        function llenarArrayMostrados(array) {
            const empezar = (paginaActual - 1) * elementosPorPagina;
            const finalizar = empezar + elementosPorPagina;
        
            return array.slice(empezar, finalizar);
        }


        function cambiarPagina(direccion) {
            paginaActual += direccion;
            if (paginaActual < 1) {
                paginaActual = 1;
            }
            const maxPagina = Math.ceil(zapatos.length / elementosPorPagina);
            if (paginaActual > maxPagina) {
                paginaActual = maxPagina;
            }

            document.getElementById("paginaactual").textContent = paginaActual;
            filtrarZapatos();
        }


        function actualizarTabla(zapatosFiltrados) {
            const tabla = document.getElementById('tabla');
            tabla.innerHTML = '';
        
            for (let i = 0; i < zapatosFiltrados.length; i++) {
                const zapato = zapatosFiltrados[i];
        
                const fila = document.createElement('tr');
        
                const idZapato = document.createElement('td');
                idZapato.textContent = zapato.id+1;
                fila.appendChild(idZapato);
        
                const imgElement = document.createElement("img");
                imgElement.src = zapato.imagen;
                imgElement.classList.add("image-size");
        
                const imagenCell = document.createElement('td');
                imagenCell.appendChild(imgElement);
                fila.appendChild(imagenCell);
        
                const marcaCell = document.createElement('td');
                marcaCell.textContent = zapato.marca;
                fila.appendChild(marcaCell);
        
                const referenciaCell = document.createElement('td');
                referenciaCell.textContent = zapato.referencia;
                fila.appendChild(referenciaCell);
        
                const colorCell = document.createElement('td');
                colorCell.textContent = zapato.color;
                fila.appendChild(colorCell);
        
                const tallaCell = document.createElement('td');
                tallaCell.textContent = zapato.talla;
                fila.appendChild(tallaCell);
        
                const infoAdicionalCell = document.createElement('td');
                infoAdicionalCell.textContent = zapato.infoAdicional || '';
                fila.appendChild(infoAdicionalCell);
        
                const verMasCell = document.createElement('td');
                const verMasButton = document.createElement('button');
                verMasButton.textContent = 'Ver más..';
                verMasButton.addEventListener('click', () => verMas(zapato));
                verMasCell.appendChild(verMasButton);
                fila.appendChild(verMasCell);
        
                tabla.appendChild(fila);
            }
        }
        


        function filtrarZapatos() {
            const filtro = document.getElementById('filtro1').value.toLowerCase();
        
            let zapatosFiltrados = [];
            if (filtro === "") {
                zapatosFiltrados = zapatos; // Si no hay filtro, mostrar todos los zapatos
            } else {
                zapatosFiltrados = zapatos.filter(zapato =>
                    zapato.marca.toLowerCase().includes(filtro)
                );
            }
        
            // Actualizar la tabla con los zapatos filtrados y respetando la paginación
            actualizarTabla(llenarArrayMostrados(zapatosFiltrados));
        }

        filtrarZapatos();
        

        function verMas(zapato) {
            // Obtener el modal y los elementos del modal
            const modal = document.getElementById("modal");
            const modalDetails = document.getElementById("modalDetalles");
            const span = document.getElementsByClassName("span")[0];
          
            // Llenar el contenido del modal con la información del zapato y campos editables
            modalDetails.innerHTML = `
              <img src="${zapato.imagen}" alt="Imagen de zapato">
              <p>Marca: <input type="text" id="marcaInput" value="${zapato.marca}"></p>
              <p>Referencia: <input type="text" id="referenciaInput" value="${zapato.referencia}"></p>
              <p>Color: <input type="text" id="colorInput" value="${zapato.color}"></p>
              <p>Talla: <input type="text" id="tallaInput" value="${zapato.talla}"></p>
              <p>Precio: <input type="number" id="precioInput" value="${zapato.precio}"></p>
              <!-- Agrega más campos de acuerdo a las propiedades del zapato -->
              <button onclick="guardarCambios(${zapato.id})">Guardar cambios</button>
            `;
          
            // Mostrar el modal cuando se hace clic en "Ver más"
            modal.style.display = "block";
          
            // Cerrar el modal al hacer clic en la 'X'
            span.onclick = function () {
              modal.style.display = "none";
            };
          
            // Cerrar el modal si se hace clic fuera del área del modal
            window.onclick = function (event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
            };
        }