import React from 'react';

export default Modal =>
    <div>
        <div class="modal fade" id="GIFTS" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Wishlist</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Me diga quais são os seus desejos e o que você gostaria de presente!"></textarea>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="send" class="btn btn-primary">Enviar</button>
                </div>
              </div>
            </div>
          </div>
    </div>