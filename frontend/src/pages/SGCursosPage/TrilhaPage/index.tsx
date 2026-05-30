import { useState } from "react";
import { TrilhaForm } from "./TrilhaForm";
import { TrilhaTable } from "./TrillhaTable";
import type { ITrilha } from "../../../models/trilha.model";

export const TrilhaPage = () => {

    const [trilha, setTrilha] = useState<ITrilha | null>(null);
    const [trilhas, setTrilhas] = useState<ITrilha[]>([]);
    const [keyReiniciar, setKeyReiniciar] = useState(0);

    return (
        <div className="row">
            <div className="col-4 mt-5">
                <TrilhaForm key={trilha ? trilha.id : `new-${keyReiniciar}`} trilha={trilha} setTrilha={setTrilha} setTrilhas={setTrilhas} setKeyReiniciar={setKeyReiniciar} />
            </div>
            <div className="col-8 mt-5">
                <TrilhaTable trilhas={trilhas} setTrilha={setTrilha} setTrilhas={setTrilhas} />
            </div>
        </div>
    );
}