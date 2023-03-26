package rdvmedecins.repositories;

import java.util.Date;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import rdvmedecins.entities.Rv;

public interface RvRepository extends CrudRepository<Rv, Long> {
	@Query("select rv from Rv rv left join fetch rv.client c left join fetch rv.creneau cr where cr.medecin.id=?1 and rv.jour=?2")
	Iterable<Rv> getRvMedecinJour(long idMedecin, Date jour);
}
