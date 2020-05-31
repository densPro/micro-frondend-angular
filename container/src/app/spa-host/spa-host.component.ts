import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SingleSpaService } from 'src/services/single-spa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spa-host',
  template: '<div #appContainer></div>',
})
export class SpaHostComponent implements OnInit, OnDestroy {

  @ViewChild('appContainer', { static: true }) private appContainerRef: ElementRef;
  private appName: string;

  constructor(private service: SingleSpaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.appName = this.route.snapshot.data.app;
    this.service.mount(this.appName, this.appContainerRef.nativeElement).subscribe();
  }

  async ngOnDestroy() {
    await this.service.unmount(this.appName).toPromise();
  }
}
