import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';
import VideoResize from 'quill-video-resize-module';

const FormatAttributesList = [
  'alt',
  'height',
  'width',
  'style'
];
var BaseImageFormat = Quill.import('formats/image');
class ImageFormat extends BaseImageFormat {
  domNode;
  static formats(domNode) {
    return FormatAttributesList.reduce(function (formats, attribute) {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }
  format(name, value) {
    if (FormatAttributesList.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}
Quill.register(ImageFormat, true);

var BaseVideoFormat = Quill.import('formats/video');
class VideoFormat extends BaseVideoFormat {
  domNode;
  static formats(domNode) {
    return FormatAttributesList.reduce(function (formats, attribute) {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }
  format(name, value) {
    if (FormatAttributesList.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}
Quill.register(VideoFormat, true);
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/videoResize', VideoResize);

import * as jsPDF from 'jspdf'
import * as $ from 'jquery';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit {

  @Output() Output = new EventEmitter<any>();
  html_text = '';
  modules = {};

  constructor() {
    this.modules = {
      formula: true,
      imageResize: {},
      videoResize: {},
      syntax: true,
      // toolbar: [['formula'], ['image'], ['code-block']]
    };
  }
  emit() {
    // this.Output.emit(this.html_text);
    console.log(this.html_text)
    document.getElementById('show').innerHTML = this.html_text;
  }

  ngOnInit() {
  }

  export() {
    let doc = new jsPDF('p', 'pt', 'a4');
    doc.lineHeightProportion = 2;
    doc.html(document.getElementById("show"), {
      callback: function (doc) {
        var iframe = document.createElement('iframe');
				iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
				document.body.appendChild(iframe);
				iframe.src = doc.output('datauristring');
      }
    })
  }

}
