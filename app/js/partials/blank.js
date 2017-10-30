function DropDown(el) {
		this.promoSelect = el;
		this.placeholder = this.promoSelect.children('span');
		this.opts = this.promoSelect.find('ul.dropdown > li');
		this.val = '';
		this.index = -1;
		this.initEvents();
	}
	DropDown.prototype = {
		initEvents : function() {
			var obj = this;

			obj.promoSelect.on('click', function(event){
				$(this).toggleClass('active');
				return false;
			});

			obj.opts.on('click',function(){
				var opt = $(this);
				obj.val = opt.text();
				obj.index = opt.index();
				obj.placeholder.text('Class: ' + obj.val);
			});
		},
		getValue : function() {
			return this.val;
		},
		getIndex : function() {
			return this.index;
		}
	}

	$(function() {

		var promoSelect = new DropDown( $('#promoSelect') );

		$(document).click(function() {
			$('.c-promoForm__select').removeClass('active');
		});

	});