/* eslint-disable */
(function () {

  function TypewriterEffect (element) {
    this.element = element;
    this.textArr = element.getAttribute('data-vce-typewriter-text') && element.getAttribute('data-vce-typewriter-text').split('>typewriter>');
    this.delay = parseInt(element.getAttribute('data-vce-typewriter-delay'));
    this.speed = parseInt(element.getAttribute('data-vce-typewriter-speed'));
    this.loop = element.getAttribute('data-vce-typewriter-loop') === 'true';
    this.text = null;
    element.typewriter = this;
  }

  TypewriterEffect.prototype.destroy = function () {
    this.element = null;
    this.textArr = null;
    this.delay = null;
    this.speed = null;
    this.loop = null;
    this.text = null;
  }

  TypewriterEffect.prototype.setText = function () {
    this.text = {
      current: '',
      word: this.textArr[ 0 ],
      letter: this.textArr[ 0 ][ 0 ],
      n: 0,
      i: 0
    }
  }

  TypewriterEffect.prototype.emptyText = function () {
    return !this.textArr.length
  }

  TypewriterEffect.prototype.animate = function () {
    var self = this;
    if (self.text) {
      this.text.letter = this.text.word[ this.text.n++ ]
      this.text.current += this.text.letter
      this.element.textContent = this.text.current
      if (this.text.n < this.text.word.length) {
        setTimeout(self.animate.bind(self), this.speed)
      } else if (this.textArr.length > 1 && (this.textArr[ this.text.i + 1 ] || this.loop)) {
        setTimeout(self.reverse.bind(self), this.delay)
      }
    } else {
      if (this.element) {
        this.setText()
        this.animate()
      }
    }
  }

  TypewriterEffect.prototype.reverse = function () {
    var self = this;
    if (this.text && this.text.current) {
      this.text.current = this.text.current.slice(0, -1)
      this.element.textContent = this.text.current
      setTimeout(self.reverse.bind(this), this.speed)
    } else {
      if (this.text) {
        this.text.i++
        if (this.text.i < this.textArr.length) {
          this.text.current = ''
          this.text.n = 0
          this.text.word = this.textArr[ this.text.i ]
          this.text.letter = this.text.word[ 0 ]
          this.animate()
        } else if (this.loop) {
          this.setText()
          this.animate()
        }
      }
    }
  }

  function animateElement (element) {
    if (element.typewriter) {
      element.typewriter.destroy()
    }
    var typewriterElement = new TypewriterEffect(element)
    !typewriterElement.emptyText() && typewriterElement.animate()
  }

  function init (type, id) {
    var typewriterElementList = document.querySelectorAll('.vce-typewriter-init')

    if (!typewriterElementList.length) {
      return
    }

    if (id) {
      var element = document.querySelector('#el-' + id + ' .vce-typewriter-init')
      element && animateElement(element)
    } else {
      typewriterElementList.forEach(function (element) {
        animateElement(element)
      })
    }
  }

  window.vcv.on('ready', function (str, data) {
    init(str, data)
  })
})();
/* eslint-enable */
