import "./teacher.css";
import React from "react";

function Teacher() {
  return (
    <div className="teacher">
      <h1>teacher</h1>
      <div class="col-lg-4 text-center mb-5">
        <img src="#" alt="" class="img-fluid rounded-circle w-50 mb-4" />
        <h4>Cameron Williamson</h4>
        <span class="d-block mb-3 text-uppercase">Founder &amp; CEO</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
      </div>
      <div class="col-lg-4 text-center mb-5">
        <img src="#" alt="" class="img-fluid rounded-circle w-50 mb-4" />
        <h4>Wade Warren</h4>
        <span class="d-block mb-3 text-uppercase">Founder, VP</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
      </div>
      <div class="col-lg-4 text-center mb-5">
        <img src="#" alt="" class="img-fluid rounded-circle w-50 mb-4" />
        <h4>Jane Cooper</h4>
        <span class="d-block mb-3 text-uppercase">Editor Staff</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!</p>
      </div>
      <div>
        <h1>Ages 2-3</h1>
        <table>
          <thead>
            <td>First-name</td>
            <td>Last-name</td>
            <td>Age</td>
            <td>Parent-phone-number</td>

          </thead>
          <tbody>
            <tr>
              <td>{ }</td>
              <td>{ }</td >
              <td>{ }</td>
              <td>{ }</td >
              <td>{ }</td >
              <td>{ }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1>Ages 3-5</h1>
      <table>
        <thead>
          <td>First-name</td>
          <td>Last-name</td>
          <td>Age</td>
          <td>Parent-phone-number</td>
        </thead>
        <tbody>
          <tr>
            <td>{ }</td>
            <td>{ }</td >
            <td>{ }</td>
            <td>{ }</td >
            <td>{ }</td >
            <td>{ }</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Teacher;
