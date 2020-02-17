import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class ReloadtoolComponent implements OnInit {
    private formBuilder;
    private http;
    constructor(formBuilder: FormBuilder, http: HttpClient);
    requestResultChange: EventEmitter<any>;
    requestResult: string;
    reloadForm: import("@angular/forms").FormGroup;
    ngOnInit(): void;
    onSubmit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReloadtoolComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReloadtoolComponent, "lib-reloadtool", never, {}, {
    "requestResultChange": "requestResultChange";
}, never>;
}

//# sourceMappingURL=reloadtool.component.d.ts.map