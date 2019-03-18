<?php include 'header-interna.php'; ?>

<section class="contato" id="contato">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <h4 class="sectionTitle">
              Fale conosco
            </h4>
          </div>
        </div>
        <div class="row content">
          <div class="changeSize">
            <ul>
              <li class="lowercase"><small>A-</small></li>
              <li class="uppercase">A+</li>
            </ul>
          </div>
          <div class="col-md-10">
            <form>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Assunto</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Nome</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="John Doe">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">E-mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="exemplo@email.com">
                <small id="emailHelp" class="form-text text-muted">Nós não compartilharemos seu e-mail com ninguém.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Telefone</label>
                <input type="text" class="form-control telefone" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="(xx) xxxxx-xxxx">
              </div>
              <div class="form-group">
                <label for="validationTextarea">Mensagem</label>
                <textarea class="form-control" id="validationTextarea" placeholder="Mensagem" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include 'footer.php'; ?>
