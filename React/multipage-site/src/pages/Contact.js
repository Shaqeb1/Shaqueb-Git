import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get('name');
  return (
    <div>
      <h2>Hey {name} Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos
        dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur
        perferendis praesentium corporis possimus ducimus et minima voluptatum.
        Numquam mollitia culpa consectetur unde illum est aut dicta eligendi
        vero molestias impedit sint, maiores saepe voluptas necessitatibus
        excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque,
        cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae
        molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam
        minima sit atque, tempora doloribus blanditiis id ipsum
      </p>
    </div>
  );
}
