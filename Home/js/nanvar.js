const D=document
const Logo =D.querySelector('#logo')
const search=D.querySelector('#Search')
const Promotion= D.querySelector('#offer')
const Lo=D.querySelector('#Locotion')
const subCategory=D.querySelector('#SubCategory')

function Logotipo()
{
 const imgLogo   =D.createElement('img')
    Logo.appendChild(imgLogo)
    imgLogo.src='data:image/jpeg;base64,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'
    imgLogo.alt='No cargo la iamgen'
    imgLogo.classList.add('img')
}
Logotipo()

function Search(){
const Sear=D.createElement('input')
search.appendChild(Sear)
Sear.placeholder='Buscar tus productos favoritos'
Sear.type='search'
search.autofocus
Sear.classList.add('input')

}

Search()

function IconSearch(){
    const Icon=D.createElement('button')
    search.appendChild(Icon)
    const I = D.createElement('i')
    Icon.appendChild(I)
    I.classList.add('bi-search')

}
IconSearch()

function offer(){
    const Offer=D.createElement('img')
    Promotion.appendChild(Offer)
    Offer.src='https://http2.mlstatic.com/D_NQ_918131-MLA77034316926_062024-OO.webp'
    Offer.alt='No cargo la imagen'
Offer.classList.add('oferta')

}
offer()

function IconLocation(){
    const Locatio=D.createElement('ul')
    const li=D.createElement('li')
    const i=D.createElement('i')
    Lo.appendChild(Locatio)
    Locatio.appendChild(li)
    li.appendChild(i)
   Locatio.classList.add('UserLocation')
   i.classList.add('bi-geo-alt')
   

}
IconLocation()

function SubCategory(){
  const ul= D.createElement('ul')
  const liCategory= D.createElement('li')
  const liOffer= D.createElement('li')
  const liHistory= D.createElement('li')
  const liSuperMerkert= D.createElement('li')
  subCategory.appendChild(ul)
  ul.appendChild(liCategory)
  ul.appendChild(liHistory)
  ul.appendChild(liOffer)
  ul.appendChild(liSuperMerkert)
  liCategory.innerHTML='Categoria'
  liOffer.innerHTML='Oferta'
  liHistory.innerHTML='Hitorial'
  liSuperMerkert.innerHTML='Supercado'

  ul.classList.add('list')

}
SubCategory()