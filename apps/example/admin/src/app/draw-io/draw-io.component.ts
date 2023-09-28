import {Component, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'draw-io',
  templateUrl: './draw-io.component.html',
})
export class DrawIoComponent {
  embedded = {
    "highlight": "#0000ff",
    "nav": true,
    "resize": true,
    "toolbar": "zoom layers tags lightbox",
    "edit": "_blank",
    "xml": "<mxfile host=\"app.diagrams.net\" modified=\"2023-09-15T16:08:05.193Z\" agent=\"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36\" etag=\"IEAQI88X5jdoWD9PD6lf\" version=\"21.7.5\" type=\"google\">\n  <diagram name=\"Page-1\" id=\"AeLBjCoLBt38s6I4U-rd\">\n    <mxGraphModel dx=\"1434\" dy=\"807\" grid=\"1\" gridSize=\"10\" guides=\"1\" tooltips=\"1\" connect=\"1\" arrows=\"1\" fold=\"1\" page=\"1\" pageScale=\"1\" pageWidth=\"850\" pageHeight=\"1100\" math=\"0\" shadow=\"0\">\n      <root>\n        <mxCell id=\"0\" />\n        <mxCell id=\"1\" parent=\"0\" />\n        <mxCell id=\"JncBnf603iRC5ToNbfT_-2\" value=\"Event\" style=\"rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d79b00;\" vertex=\"1\" parent=\"1\">\n          <mxGeometry x=\"220\" y=\"390\" width=\"120\" height=\"60\" as=\"geometry\" />\n        </mxCell>\n        <mxCell id=\"JncBnf603iRC5ToNbfT_-3\" value=\"\" style=\"endArrow=classic;html=1;rounded=0;\" edge=\"1\" parent=\"1\">\n          <mxGeometry width=\"50\" height=\"50\" relative=\"1\" as=\"geometry\">\n            <mxPoint x=\"80\" y=\"160\" as=\"sourcePoint\" />\n            <mxPoint x=\"830\" y=\"160\" as=\"targetPoint\" />\n          </mxGeometry>\n        </mxCell>\n        <mxCell id=\"JncBnf603iRC5ToNbfT_-6\" style=\"edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=0;entryDx=0;entryDy=0;curved=1;\" edge=\"1\" parent=\"1\" source=\"JncBnf603iRC5ToNbfT_-4\" target=\"JncBnf603iRC5ToNbfT_-5\">\n          <mxGeometry relative=\"1\" as=\"geometry\" />\n        </mxCell>\n        <mxCell id=\"JncBnf603iRC5ToNbfT_-4\" value=\"Automation\" style=\"rounded=1;whiteSpace=wrap;html=1;fillColor=#e1d5e7;strokeColor=#9673a6;\" vertex=\"1\" parent=\"1\">\n          <mxGeometry x=\"90\" y=\"40\" width=\"120\" height=\"60\" as=\"geometry\" />\n        </mxCell>\n        <mxCell id=\"JncBnf603iRC5ToNbfT_-7\" style=\"edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.433;entryY=-0.067;entryDx=0;entryDy=0;entryPerimeter=0;curved=1;\" edge=\"1\" parent=\"1\" source=\"JncBnf603iRC5ToNbfT_-5\" target=\"JncBnf603iRC5ToNbfT_-2\">\n          <mxGeometry relative=\"1\" as=\"geometry\" />\n        </mxCell>\n        <mxCell id=\"JncBnf603iRC5ToNbfT_-5\" value=\"Command\" style=\"rounded=1;whiteSpace=wrap;html=1;fillColor=#dae8fc;strokeColor=#6c8ebf;\" vertex=\"1\" parent=\"1\">\n          <mxGeometry x=\"130\" y=\"210\" width=\"120\" height=\"60\" as=\"geometry\" />\n        </mxCell>\n        <mxCell id=\"JncBnf603iRC5ToNbfT_-11\" style=\"edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=1;entryDx=0;entryDy=0;curved=1;\" edge=\"1\" parent=\"1\" source=\"JncBnf603iRC5ToNbfT_-8\" target=\"JncBnf603iRC5ToNbfT_-10\">\n          <mxGeometry relative=\"1\" as=\"geometry\" />\n        </mxCell>\n        <mxCell id=\"JncBnf603iRC5ToNbfT_-8\" value=\"Read Model\" style=\"rounded=1;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;\" vertex=\"1\" parent=\"1\">\n          <mxGeometry x=\"300\" y=\"210\" width=\"120\" height=\"60\" as=\"geometry\" />\n        </mxCell>\n        <mxCell id=\"JncBnf603iRC5ToNbfT_-9\" style=\"edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;entryX=0.5;entryY=1;entryDx=0;entryDy=0;curved=1;\" edge=\"1\" parent=\"1\" target=\"JncBnf603iRC5ToNbfT_-8\">\n          <mxGeometry relative=\"1\" as=\"geometry\">\n            <mxPoint x=\"310\" y=\"380\" as=\"sourcePoint\" />\n            <mxPoint x=\"282\" y=\"396\" as=\"targetPoint\" />\n          </mxGeometry>\n        </mxCell>\n        <mxCell id=\"JncBnf603iRC5ToNbfT_-10\" value=\"Wireframe\" style=\"rounded=1;whiteSpace=wrap;html=1;\" vertex=\"1\" parent=\"1\">\n          <mxGeometry x=\"340\" y=\"40\" width=\"120\" height=\"60\" as=\"geometry\" />\n        </mxCell>\n      </root>\n    </mxGraphModel>\n  </diagram>\n</mxfile>\n"
  }

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  public ngOnInit() {

    let script = this._renderer2.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://viewer.diagrams.net/js/viewer-static.min.js';
    this._renderer2.appendChild(this._document.body, script);
  }
}
